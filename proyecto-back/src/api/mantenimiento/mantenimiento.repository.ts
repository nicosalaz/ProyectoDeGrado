import { Injectable, HttpStatus } from '@nestjs/common';
import { DataSource, Repository } from "typeorm";
import { Mantenimiento } from "./entities/mantenimiento.entity";
import { ComentarioEspecieArborea } from "./entities/especie_arborea_comentario.entity";
import { CreateMantenimientoDto } from "./dto/create-mantenimiento.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { S3Service } from '../s3/s3.service';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';

@Injectable()
export class MantenimientoRepository extends Repository<Mantenimiento> {
  constructor(private dataSource: DataSource,  
    @InjectRepository(ComentarioEspecieArborea)
    public usuarioRolRepository: Repository<ComentarioEspecieArborea>,
    private s3Services: S3Service
) {
    super(Mantenimiento, dataSource.createEntityManager());
  }

  async crearMantenimiento(mantenimientoDto : CreateMantenimientoDto, file:Express.Multer.File = null){
    try {
        let mantenimiento = await this.save(mantenimientoDto);
        let mantenimientoSave = await this.findOne({
            where:{
              id: mantenimiento.id
            }})
        if(file != null){
            await this.addimagesUser(file, mantenimientoSave.id); 
          }
        return {
            status: HttpStatus.ACCEPTED,
            response: mantenimientoSave
        }
    } catch (error) {
        return {
            status:HttpStatus.BAD_REQUEST,
            error: error
        }
    }
  }

  async addimagesUser(file: Express.Multer.File, idMantenimiento){
    try {
      const key = `${file['originalName']}${Date.now()}`;
      const imagenUrl = await this.s3Services.subirImagen(file,key);
      const id = Number(idMantenimiento);
      const response = this.update(id, {
        imagen: imagenUrl
      })
      return {status: 200, reponse:response};
    } catch (error) {
      return error
    }
  }

  async allMantenimientos(){
    try {
        let mantenimientos = await this.query(`
        select m.id, m.titulo, m.descripcion, m.id_especie_arborea, ea.nombre ,
        CONCAT (u.nombre, ' ', u.apellido) as nombre_registro,
        m.estado, m.imagen
        from mantenimiento m
        join especie_arborea ea on ea.id = m.id_especie_arborea 
        join usuario u on u.id = m.id_usuario;`);

        return {
            status: HttpStatus.ACCEPTED,
            response: mantenimientos
        }
    } catch (error) {
        return {
            status:HttpStatus.BAD_REQUEST,
            error: error
        }
    }

  }


  async mantenimientosUsuario(id_usuario){
    try {
        let mantenimientos = await this.query(`
        select m.id, m.titulo, m.descripcion, m.id_especie_arborea, ea.nombre ,
        CONCAT (u.nombre, ' ', u.apellido) as nombre_registro,
        m.estado, m.imagen
        from mantenimiento m
        join especie_arborea ea on ea.id = m.id_especie_arborea 
        join usuario u on u.id = m.id_usuario
        where id_empleado = ?
        ;`,[id_usuario]);

        return {
            status: HttpStatus.ACCEPTED,
            response: mantenimientos
        }
    } catch (error) {
        return {
            status:HttpStatus.BAD_REQUEST,
            error: error
        }
    }

  }

  async actualizarMantenimiento(dataActualiza: UpdateMantenimientoDto, file:Express.Multer.File = null){
    try {
        let manActu = await this.update(dataActualiza.id, dataActualiza);
        if (file != null) {
            await this.addimagesUser(file, dataActualiza.id); 
        }
        return {
            status: HttpStatus.ACCEPTED,
            response: manActu
        }
    } catch (error) {
        return {
            status:HttpStatus.BAD_REQUEST,
            error: error
        }
    }
  }

  async eliminarMantenimiento(id_mantenimiento){
    try {
        let manActu = await this.update(id_mantenimiento, {
            activo:false
        });

        return {
            status: HttpStatus.ACCEPTED,
            response: manActu
        }
    } catch (error) {
        return {
            status:HttpStatus.BAD_REQUEST,
            error: error
        }
    }
  }

  async asignarMantenimiento(id_usuario, id_matenimiento){
    try {
        let manActu = await this.update(id_matenimiento, {
            estado:2, id_empleado:id_usuario
        });

        return {
            status: HttpStatus.ACCEPTED,
            response: manActu
        }
    } catch (error) {
        return {
            status:HttpStatus.BAD_REQUEST,
            error: error
        }
    }
  }

}