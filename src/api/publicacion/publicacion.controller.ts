import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Res, HttpStatus, HttpException } from '@nestjs/common';
import { PublicacionService } from './publicacion.service';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';
import { Response } from 'express';
import { Publicacion } from './entities/publicacion.entity';

@Controller()
export class PublicacionController {
  constructor(private readonly publicacionService: PublicacionService) {}

  @Get()
  findAll() {
    return this.publicacionService.findAll();
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.publicacionService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updatePublicacionDtoList: UpdatePublicacionDto[],
  ) {
    try {
      const result: Publicacion[] = await this.publicacionService.update(
        updatePublicacionDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
