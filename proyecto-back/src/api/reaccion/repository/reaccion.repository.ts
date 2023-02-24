import { Injectable } from '@nestjs/common';
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

        const publicacionesLike = await this.findBy({id_usuario:idUsuario})

        return {
            response: publicacionesLike,
            status: 200
        }
    } catch (error) {
        return error
    }
   }
}
