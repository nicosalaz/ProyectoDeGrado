import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { Publicacion } from '../entities/publicacion.entity';
import { CreatePublicacionDto } from '../dto/create-publicacion.dto';
import { UpdatePublicacionDto } from '../dto/update-publicacion.dto';


@Injectable()
export class PublicacionRepository extends Repository<Publicacion> {
  constructor(private dataSource: DataSource) {
    super(Publicacion, dataSource.createEntityManager());
  }

  async crearPublicacion(publicacion:CreatePublicacionDto){
    try {
        if(publicacion.descripcion == null &&
            publicacion.id_usuario == null){
                return {
                    error: 'Error campo obligatorios',
                    status: 404
                }
            }

        const publicacionRegistrada = await this.save(publicacion);

        const retornoInfoDescripcion = await this.query(`SELECt p.id, p.descripcion, CONCAT(u.nombre, ' ', u.apellido) as 'nombre', COUNT(r.id) as 'like', (select count(*) from comentario c where c.id_publicacion = p.id and c.activo = 1) as 'num_comen' from publicacion p 
	    left join usuario u on u.id = p.id_usuario
	    left join reaccion r  on r.id_publicacion = p.id 
	    where u.id = ? and p.id = ?`, [publicacionRegistrada.id_usuario, publicacionRegistrada.id])

        return {
            response: retornoInfoDescripcion,
            status: 200
        }
    } catch (error) {
        return error
    }
  }

  async publicacionUsuario(idUsuario: number){
    try {
        if(idUsuario == null){
            return {
                error: 'Error parametro erroneo',
                status: 404
            }
        }

        const publicaciones = await this.query(`
        SELECt p.id, p.descripcion, CONCAT(u.nombre, ' ', u.apellido) as 'nombre', COUNT(r.id) as 'like', (select count(*) from comentario c where c.id_publicacion = p.id and c.activo = 1) as 'num_comen'
         from publicacion p 
	    left join usuario u on u.id = p.id_usuario
	    left join reaccion r  on r.id_publicacion = p.id and r.activo = true
	    where u.id = ? and p.activo = 1
	    GROUP by p.id 
        order by p.id desc
        `, [idUsuario]);

        return {
            response: publicaciones,
            status: 200
        }
    } catch (error) {
        return error
    }
  }

  async actualizarPublicacion(publicacionActualizar:UpdatePublicacionDto){
    const publicacion = this.findOneBy({id:publicacionActualizar.id})

    if(publicacion != null){
        const actualizado = this.update((await publicacion).id, publicacionActualizar);
        return{
            response: actualizado,
            status: 200
        };
    }

    else{
        return {
            response: 'Error no existe publicacion',
            status: 500
        }
    }
  }


  async eliminadoLogico(publicacionActualizar:any){
    const publicacion = this.findOneBy({id:publicacionActualizar.id})

    if(publicacion != null){
        const actualizado = this.update((await publicacion).id, {
            activo:publicacionActualizar.activo
        });
        return{
            response: actualizado,
            status: 200
        };
    }

    else{
        return {
            response: 'Error no existe publicacion',
            status: 500
        }
    }
  }


  async publicacionGeneral(){
    try {
        const publicaciones = await this.query(`
        SELECt u.id as 'id_user', p.id, p.descripcion, CONCAT(u.nombre, ' ', u.apellido) as 'nombre', COUNT(r.id) as 'like', (select count(*) from comentario c where c.id_publicacion = p.id and c.activo = 1) as 'num_comen'
         from publicacion p 
	    left join usuario u on u.id = p.id_usuario
	    left join reaccion r  on r.id_publicacion = p.id and r.activo = true
	    where  p.activo = 1
	    GROUP by p.id  
        order by p.id desc`,)
        return {
            response: publicaciones,
            status: 200
        }

    } catch (error) {
        return error
    }
  }
}