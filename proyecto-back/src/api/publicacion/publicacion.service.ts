import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';
import { Publicacion } from './entities/publicacion.entity';
import { PublicacionRepository } from './repository/publicacion.repository';

@Injectable()
export class PublicacionService {
  constructor(
    private publicacionRepository: PublicacionRepository,
  ) {}

  async crearPublicacion(pubilcacionNueva: CreatePublicacionDto){
    return await this.publicacionRepository.crearPublicacion(pubilcacionNueva);
  }

  async buscarPublicacionPorUsuario(idUsuario:number){
    return await this.publicacionRepository.publicacionUsuario(idUsuario)
  }

  async actualizarPublicacion(bodyActualizar:UpdatePublicacionDto){
    return await this.publicacionRepository.actualizarPublicacion(bodyActualizar)
  }

  async deletePublicacion(bodyActualizar:any){
    return await this.publicacionRepository.eliminadoLogico(bodyActualizar)
  }
}
