import { DataSource, Repository } from "typeorm";
import { EspecieArboreaRequest } from "./entities/especie_arborea_request.entity";
import { Injectable } from "@nestjs/common";
import { CreateEspecieArboreaRequestDto } from "./dto/create-especie_arborea_request.dto";
import { UpdateEspecieArboreaRequestDto } from "./dto/update-especie_arborea_request.dto";
import { AceptarEspecieArboreaRequestDto } from "./dto/aceptar-especie-arborea-request.dto";
import { EspecieArboreaRepository } from "../especie_arborea/repository/especie_arborea.reposirory";
import { CreateEspecieArboreaDto } from "../especie_arborea/dto/create-especie_arborea.dto";
import { EspecieArboreaUbicacionRepository } from "../especie_arborea_ubicacion/especie-arborea-ubicacion.repository";
import { CreateEspecieArboreaUbicacionDto } from "../especie_arborea_ubicacion/dto/create-especie_arborea_ubicacion.dto";
import { RechazarEspecieArboreaRequestDto } from "./dto/rechazar-especie-arborea.dto";
import { S3Service } from "../s3/s3.service";

@Injectable()
export class EspecieArboreaRequestRepository extends Repository<EspecieArboreaRequest> {
  constructor(private dataSource: DataSource, private especieArboreaRepository: EspecieArboreaRepository,
    private s3Services: S3Service
     ) {
    super(EspecieArboreaRequest, dataSource.createEntityManager());
  }
  async createEspecieArborea(especieArborea:CreateEspecieArboreaRequestDto, file: Express.Multer.File = null){
    try {
        const EspecieArboreaNew = await this.save(especieArborea);
        const especieRegistrada = await this.query(`
        select ear.id as id_request, ear.descripcion, concat('{ "lat": ',ear.latitud , ', "lng":', ear.longitud , '}') as "position", e.id as id,
    e.nombre as title, concat(u.nombre  , ' ', u.apellido) as "name", e.nombre as nombre, u.id as id_usuario, ear.nombre as nombre_esp, ear.imagen
from especie_arborea_request ear 
join especie e on e.id = ear.id_especie 
join usuario u on u.id = ear.id_usuario 
where ear.activo = 1 and ear.id = ?
       `, [EspecieArboreaNew.id])
       if(file != null){
        await this.addimagesRequest(file, EspecieArboreaNew.id); 
      }

        return {
            status:200,
            response: especieRegistrada
        }
    } catch (error) {
        return error
    }
  }

  async especieArborea(){
    try {
        
            const especierborea = await this.query(`
            select ear.id as id_request, ear.descripcion, concat('{ "lat": ',ear.latitud , ', "lng":', ear.longitud , '}') as "position", e.id as id,
		e.nombre as title, concat(u.nombre  , ' ', u.apellido) as "name", e.nombre as nombre, u.id as id_usuario, ear.nombre as nombre_esp, ear.imagen
from especie_arborea_request ear 
	join especie e on e.id = ear.id_especie 
	join usuario u on u.id = ear.id_usuario 
	where ear.activo = 1
           `)

            return {
                status: 200,
                response: especierborea
            }
        
    } catch (error) {
        return error;
    }
  }

  async editarEspecieArborea(especieArborea:UpdateEspecieArboreaRequestDto, file: Express.Multer.File = null){
    try {
      const EspecieArboreaNew = await this.update(especieArborea.id, especieArborea);
      if(file != null){
        await this.addimagesRequest(file, especieArborea.id); 
      }
      return {
          status:200,
          response: EspecieArboreaNew
      }
  } catch (error) {
      return error
  }
  }


  async eliminarEspecieArborea(especieArborea:UpdateEspecieArboreaRequestDto){
    try {
      const EspecieArboreaNew = await this.update(especieArborea.id, {
        activo : especieArborea.active
      });

      return {
          status:200,
          response: EspecieArboreaNew
      }
  } catch (error) {
      return error
  }
  }

  async acpetarEspecieArborea(request:AceptarEspecieArboreaRequestDto){
    let requesAceptado = await this.findOneBy({id:request.id});
    try {
        if(requesAceptado != null && requesAceptado != undefined){

           

            const especie_arborea = new CreateEspecieArboreaDto();

            especie_arborea.id_especie = requesAceptado.id_especie;
            especie_arborea.descripcion = requesAceptado.descripcion;
            especie_arborea.nombre = requesAceptado.nombre;
            especie_arborea.imagen = requesAceptado.imagen;
            const especie = await this.especieArboreaRepository.createEspecieArborea(especie_arborea, {latitud:requesAceptado.latitud, longitud:requesAceptado.longitud});
            const desactivar = await this.update(requesAceptado.id, {
                activo: false,
                aceptado_por: request.aceptado_por,
                id_especie_arborea:especie.response.id
            })
            return{
                status:200,
                response: especie
            }
        }else{
            return {
                error: "No existe",
                status: 404
            }
        }
        

    } catch (error) {
        return error
    }
  }

  async rechazarEspecieArborea(requestRechazo:RechazarEspecieArboreaRequestDto){
    let requesAceptado = await this.findOneBy({id:requestRechazo.id});
    try {
        if(requesAceptado != null && requesAceptado != undefined){
            const rechazo = this.update(requesAceptado.id, {
                activo:false,
                rechazado_por:requestRechazo.rechazado_por,
                justificacion_rechazo: requestRechazo.justificacion_rechazo
            })
            
            return{
                status:200,
                response: rechazo
            }
        }else{
            return {
                error: "No existe",
                status: 404
            }
        }
  }catch (error) {
    return error
}
}

async addimagesRequest(file: Express.Multer.File, idUser){
    try {
      const key = `${file['originalName']}${Date.now()}`;
      const imagenUrl = await this.s3Services.subirImagen(file,key);
      const id = Number(idUser);
      const response = this.update(id, {
        imagen: imagenUrl
      })
      return {status: 200, reponse:response};
    } catch (error) {
      return error
    }
  }


async estadisticas(){
  const pendientes = await this.query(`
  SELECT count(*) as pending from especie_arborea_request ear 
  where ear.activo = 1;
           `)

  const aceptadas = await this.query(`
  SELECT count(*) as aceptado from especie_arborea_request ear 
  where ear.activo = 0 and ear.aceptado_por is not null;
           `)

  const recahzadas = await this.query(`
  SELECT count(*) as rechazo from especie_arborea_request ear 
  where ear.activo = 0 and ear.rechazado_por  is not null;
           `)


  return {
    pendientes, recahzadas, aceptadas
  }
}

}