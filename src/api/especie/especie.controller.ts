import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Res, HttpStatus, HttpException } from '@nestjs/common';
import { EspecieService } from './especie.service';
import { CreateEspecieDto } from './dto/create-especie.dto';
import { UpdateEspecieDto } from './dto/update-especie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Especie } from './entities/especie.entity';
import { Response } from 'express';

@Controller()
export class EspecieController {
  constructor(private readonly especieService: EspecieService) {}

  @Post('crearEspecie')
  async create(@Body() createEspecieDto: CreateEspecieDto): Promise<boolean> {
    return await this.especieService.create(createEspecieDto);
  }

  @Get('all-especies')
  findAll() {
    return this.especieService.findAll();
  }
  /*
    - Se hace uso deñ servicio ya creado.
    - El pipe es para validar que sea entero.
    - findOne y se le pasa el id es para encontrar una especie especifica.
  */
  @Get('get-especie/:id')
  async findOneById(@Param('id',ParseIntPipe) id: number): Promise<Especie> {
    return this.especieService.findOne(id);
  }

  @Patch('update')
  async update(@Res() res: Response, @Body() updateEspecieDtoList: UpdateEspecieDto[]) {
    try {
      const result : Especie[] = await this.especieService.update(updateEspecieDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
/*
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.especieService.remove(+id);
  }*/
}
