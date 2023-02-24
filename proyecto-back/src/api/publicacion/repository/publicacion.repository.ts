import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { Publicacion } from '../entities/publicacion.entity';
import { CreatePublicacionDto } from '../dto/create-publicacion.dto';


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

        return {
            response: publicacionRegistrada,
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
        SELECt p.id, p.descripcion, CONCAT(u.nombre, ' ', u.apellido) as 'nombre', COUNT(r.id) as 'like' from publicacion p 
	    left join usuario u on u.id = p.id_usuario
	    left join reaccion r  on r.id_publicacion = p.id 
	    where u.id = ?
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

}