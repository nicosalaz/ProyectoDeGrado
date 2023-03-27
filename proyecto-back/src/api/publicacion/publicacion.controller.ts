import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Res, HttpStatus, HttpException } from '@nestjs/common';
import { PublicacionService } from './publicacion.service';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';
import { Response } from 'express';
import { Publicacion } from './entities/publicacion.entity';

@Controller()
export class PublicacionController {
  constructor(private readonly publicacionService: PublicacionService) {}

  @Post('crearPublicacion')
  async crearPublicacion(@Body() crearPublicacion: CreatePublicacionDto){
    return await this.publicacionService.crearPublicacion(crearPublicacion);
  }

  @Get('publicacionUsuario/:id')
  async publicacioneUsuario(@Param('id') id:number){
    return await this.publicacionService.buscarPublicacionPorUsuario(id)
  }

  @Patch('publicacionActu')
  async actualizarPubli(@Body() crearPublicacion: UpdatePublicacionDto){
    return await this.publicacionService.actualizarPublicacion(crearPublicacion)
  }

  @Patch('publicacionDelete')
  async deletePubli(@Body() crearPublicacion: any){
    return await this.publicacionService.deletePublicacion(crearPublicacion)
  }

  @Get()
  async publicaciones(){
    return await this.publicacionService.publicacionGeneral()
  }

}
