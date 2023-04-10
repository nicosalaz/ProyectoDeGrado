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

  @Post('crearEspecieArborea')
  async crearEspecie(@Body() nuevoEspeciearboreadto: CreateEspecieArboreaDto){
    for(let i in nuevoEspeciearboreadto){
      if(nuevoEspeciearboreadto[i] == "" || nuevoEspeciearboreadto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    return this.especieArboreaService.crearEspecieArborea(nuevoEspeciearboreadto)
  }

  @Get('especieArborea')
  async usuariosToRoles(){
    return this.especieArboreaService.buscarEspecieArborea()
  }


  @Post('editarEspecieArborea')
  async editarespecieArborea(@Body() nuevoEspeciearboreadto: UpdateEspecieArboreaDto){
    for(let i in nuevoEspeciearboreadto){
      if(nuevoEspeciearboreadto[i] == "" || nuevoEspeciearboreadto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    return this.especieArboreaService.editarEspecieArborea(nuevoEspeciearboreadto)
  }


  @Post('eliminarEspecieArborea')
  async eliminarespecieArborea(@Body() nuevoEspeciearboreadto: UpdateEspecieArboreaDto){
    for(let i in nuevoEspeciearboreadto){
      if(nuevoEspeciearboreadto[i] == "" || nuevoEspeciearboreadto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    return this.especieArboreaService.eliminarEspecieArborea(nuevoEspeciearboreadto)
  }
}
