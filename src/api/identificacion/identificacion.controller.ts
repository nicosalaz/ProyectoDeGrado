import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Res, HttpStatus, HttpException } from '@nestjs/common';
import { IdentificacionService } from './identificacion.service';
import { CreateIdentificacionDto } from './dto/create-identificacion.dto';
import { UpdateIdentificacionDto } from './dto/update-identificacion.dto';
import { Identificacion } from './entities/identificacion.entity';
import { Response } from 'express';

@Controller()
export class IdentificacionController {
  constructor(private readonly identificacionService: IdentificacionService) {}

  @Get()
  findAll() {
    return this.identificacionService.findAll();
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.identificacionService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateIdentificacionDtoList: UpdateIdentificacionDto[],
  ) {
    try {
      const result: Identificacion[] = await this.identificacionService.update(
        updateIdentificacionDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
