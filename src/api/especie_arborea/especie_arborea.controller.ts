import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { EspecieArboreaService } from './especie_arborea.service';
import { CreateEspecieArboreaDto } from './dto/create-especie_arborea.dto';
import { UpdateEspecieArboreaDto } from './dto/update-especie_arborea.dto';
import { Especie } from '../especie/entities/especie.entity';
import { EspecieArborea } from './entities/especie_arborea.entity';
import { Response } from 'express';

@Controller()
export class EspecieArboreaController {
  constructor(private readonly especieArboreaService: EspecieArboreaService) {}

  @Get('all-especies-arboreas')
  async findAll(): Promise<EspecieArborea[]> {
    return this.especieArboreaService.findAll();
  }

  @Get('findEspecieArborea/:id')
  async findOne(@Param('id') id: number): Promise<EspecieArborea> {
    return this.especieArboreaService.findOne(id);
  }

  /*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.especieArboreaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEspecieArboreaDto: UpdateEspecieArboreaDto) {
    return this.especieArboreaService.update(+id, updateEspecieArboreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.especieArboreaService.remove(+id);
  }*/
}
