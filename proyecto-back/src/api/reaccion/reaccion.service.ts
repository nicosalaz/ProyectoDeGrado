import { Injectable } from '@nestjs/common';
import { CreateReaccionDto } from './dto/create-reaccion.dto';
import { UpdateReaccionDto } from './dto/update-reaccion.dto';
import { ReaccionRepository } from './repository/reaccion.repository';

@Injectable()
export class ReaccionService {
  constructor(
    private publicacionRepository: ReaccionRepository,
  ) {}

  async crearReacion(reaccionNueva:CreateReaccionDto){

    return await this.publicacionRepository.crearOActualizarReaccion(reaccionNueva)
  }

  async getPublicacionesLikesUser(idUsuario:number){
    return await this.publicacionRepository.usuarioReacionPublicacion(idUsuario)
  }
}
