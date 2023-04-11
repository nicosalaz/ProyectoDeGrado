import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';

@Controller()
export class ComentarioController {
  constructor(private readonly comentarioService: ComentarioService) {}

  @Get('comentarioPublicacion/:id')
  async comentariosPublicacion(@Param('id') id:number){
    return await this.comentarioService.comentarioPublicacion(id)
  }

  @Post('crearComentario')
  async crearPublicacion(@Body() crearcomentario: CreateComentarioDto){
    return await this.comentarioService.crearcomentarioPublicacion(crearcomentario);
  }

  @Patch('comentarioActualizar')
  async actualizarPubli(@Body() crearcomentario: UpdateComentarioDto){
    return await this.comentarioService.actualizarComentario(crearcomentario)
  }

  @Patch('deleteComentario')
  async deleteComentario(@Body() id: number){
    return await this.comentarioService.deleteComentario(id)
  }
}
