import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from '../entities/comentario.entity';
import { CreateComentarioDto } from '../dto/create-comentario.dto';


@Injectable()
export class ComentarioRepository extends Repository<Comentario> {
  constructor(private dataSource: DataSource,) {
    super(Comentario, dataSource.createEntityManager());
  }

   async comentariosPublicacion(id:number){
    try {
        if(id != null){
            const comentarios = await this.query(`
            select c.id as id, u.id as id_usuario, concat(u.nombre, ' ', u.apellido) as nombre, c.descripcion, c.id_publicacion  from comentario c 
            join usuario u on u.id = c.id_usuario 
            where c.id_publicacion  = ? and c.activo = 1`, [id])

            return {
                status: 200,
                response: comentarios
            }
        }
    } catch (error) {
        return error;
    }
   }


   async crearComentario(bodyComentario:CreateComentarioDto){
    try {
        const comentarioNew = await this.save(bodyComentario);

        return {
            status:200,
            response: comentarioNew
        }
    } catch (error) {
        return error
    }
   }
}
