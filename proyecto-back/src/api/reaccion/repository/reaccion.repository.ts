import { Injectable, Body } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Reaccion } from '../entities/reaccion.entity';
import { CreateReaccionDto } from '../dto/create-reaccion.dto';


@Injectable()
export class ReaccionRepository extends Repository<Reaccion> {
  constructor(private dataSource: DataSource,) {
    super(Reaccion, dataSource.createEntityManager());
  }

   async crearReaccion(reaccionNueva:CreateReaccionDto){
    try {
        if(reaccionNueva.id_usuario == null &&
            reaccionNueva.id_publicacion == null){
                return {
                    error: 'Error parametro erroneo',
                status: 404
                }
            }

        reaccionNueva.tipo_reaccion = 'like';

        const reaccionRegistrada = await this.save(reaccionNueva);

        return {
            response: reaccionRegistrada,
            status: 200
        }
    } catch (error) {
        return error
    }
   }

   async usuarioReacionPublicacion(idUsuario:number){
    try {
        if(idUsuario == null){
            return {
                error: 'Error parametro erroneo',
                status: 404
            }
        }

        const publicacionesLike = await this.findBy({id_usuario:idUsuario, activo:true})

        return {
            response: publicacionesLike,
            status: 200
        }
    } catch (error) {
        return error
    }
   }

   async updateReaccion(bodyReaccion:any){
        return this.update(bodyReaccion.id, {
            activo: !bodyReaccion.activo
        })
   }

   async crearOActualizarReaccion(reaccionBody:CreateReaccionDto){
    const reaccionesExistentes = await this.query(`select * from reaccion r where r.id_usuario = ? and r.id_publicacion = ?`, [reaccionBody.id_usuario, reaccionBody.id_publicacion]);

    if(reaccionesExistentes.length == 0){
        return this.crearReaccion(reaccionBody);
    }else{
        return this.updateReaccion(reaccionesExistentes[0]);
    }
   }


}
