import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { ComentarioRepository } from './repository/comentario.repository';

@Injectable()
export class ComentarioService {
  constructor(
    private comentarioRepository: ComentarioRepository,
  ) {}

  async comentarioPublicacion(id:number){
    return this.comentarioRepository.comentariosPublicacion(id);
  }

  async crearcomentarioPublicacion(comentario:CreateComentarioDto){
    return this.comentarioRepository.crearComentario(comentario);
  }

  async actualizarComentario(comentario:UpdateComentarioDto){
    return this.comentarioRepository.actualizarComentario(comentario);
  }

  async deleteComentario(id:number){
    return this.comentarioRepository.deleteComentario(id)
  }
}
