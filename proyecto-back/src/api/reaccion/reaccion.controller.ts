import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReaccionService } from './reaccion.service';
import { CreateReaccionDto } from './dto/create-reaccion.dto';
import { UpdateReaccionDto } from './dto/update-reaccion.dto';

@Controller()
export class ReaccionController {
  constructor(private readonly reaccionService: ReaccionService) {}

  @Post('crearReaccion')
  async crearReaccion(@Body() reaccionDto:CreateReaccionDto){
    return this.reaccionService.crearReacion(reaccionDto)
  }

  @Get('reaccionUser/:id')
  async publicacioneUsuario(@Param('id') id:number){
    return await this.reaccionService.getPublicacionesLikesUser(id)
  }
}
