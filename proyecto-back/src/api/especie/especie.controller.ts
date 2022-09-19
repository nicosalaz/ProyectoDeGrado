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
} from '@nestjs/common';
import { EspecieService } from './especie.service';
import { CreateEspecieDto } from './dto/create-especie.dto';
import { UpdateEspecieDto } from './dto/update-especie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Especie } from './entities/especie.entity';
import { Response } from 'express';

@Controller()
export class EspecieController {
  constructor(private readonly especieService: EspecieService) {}

  @Get()
  findAll() {
    return this.especieService.findAll();
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.especieService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateEspecieDtoList: UpdateEspecieDto[],
  ) {
    try {
      const result: Especie[] = await this.especieService.update(
        updateEspecieDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
