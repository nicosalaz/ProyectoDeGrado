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
import { PeticionesRegistroService } from './peticiones_registro.service';
import { CreatePeticionesRegistroDto } from './dto/create-peticiones_registro.dto';
import { UpdatePeticionesRegistroDto } from './dto/update-peticiones_registro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { PeticionesRegistro } from './entities/peticiones_registro.entity';

@Controller()
export class PeticionesRegistroController {
  constructor(
    private readonly peticionesRegistroService: PeticionesRegistroService,
  ) {}

  @Get()
  findAll() {
    return this.peticionesRegistroService.findAll();
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.peticionesRegistroService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateEspecieDtoList: UpdatePeticionesRegistroDto[],
  ) {
    try {
      const result: PeticionesRegistro[] =
        await this.peticionesRegistroService.update(updateEspecieDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
