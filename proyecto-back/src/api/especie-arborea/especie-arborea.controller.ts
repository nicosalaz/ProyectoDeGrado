import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Res,
  HttpStatus,
  HttpException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { EspecieArboreaService } from './especie-arborea.service';
import { CreateEspecieArboreaDto } from './dto/create-especie-arborea.dto';
import { UpdateEspecieArboreaDto } from './dto/update-especie-arborea.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { EspecieArborea } from './entities/especie-arborea.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class EspecieArboreaController {
  constructor(private readonly especieArboreaService: EspecieArboreaService) {}

  @Get()
  findAll() {
    return this.especieArboreaService.findAll();
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.especieArboreaService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateEspecieDtoList: UpdateEspecieArboreaDto[],
  ) {
    try {
      const result: EspecieArborea[] = await this.especieArboreaService.update(
        updateEspecieDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
