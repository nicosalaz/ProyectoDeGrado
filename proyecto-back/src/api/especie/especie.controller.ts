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

  @Post('crearEspecie')
  async crearEspecie(@Body() nuevoEspeciearboreadto: CreateEspecieDto){
    for(let i in nuevoEspeciearboreadto){
      if(nuevoEspeciearboreadto[i] == "" || nuevoEspeciearboreadto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    return this.especieService.crearEspecie(nuevoEspeciearboreadto)
  }

  @Get()
  async usuariosToRoles(){
    return this.especieService.buscarEspecies()
  }

  @Post('editarEspecie')
  async editarespecieArborea(@Body() nuevoEspeciearboreadto: UpdateEspecieDto){
    for(let i in nuevoEspeciearboreadto){
      if(nuevoEspeciearboreadto[i] == "" || nuevoEspeciearboreadto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    return this.especieService.editarEspecie(nuevoEspeciearboreadto)
  }


  @Post('eliminarEspecie')
  async eliminarespecieArborea(@Body() nuevoEspeciearboreadto: UpdateEspecieDto){
    for(let i in nuevoEspeciearboreadto){
      if(nuevoEspeciearboreadto[i] == "" || nuevoEspeciearboreadto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    return this.especieService.eliminarEspecie(nuevoEspeciearboreadto)
  }
}
