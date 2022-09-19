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
import { MantenimientoService } from './mantenimiento.service';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';
import { Response } from 'express';
import { Mantenimiento } from './entities/mantenimiento.entity';

@Controller()
export class MantenimientoController {
  constructor(private readonly mantenimientoService: MantenimientoService) {}

  @Get()
  findAll() {
    return this.mantenimientoService.findAll();
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.mantenimientoService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateMantenimientoDtoList: UpdateMantenimientoDto[],
  ) {
    try {
      const result: Mantenimiento[] = await this.mantenimientoService.update(
        updateMantenimientoDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
