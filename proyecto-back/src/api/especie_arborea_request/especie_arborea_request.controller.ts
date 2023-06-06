import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { EspecieArboreaRequestService } from './especie_arborea_request.service';
import { CreateEspecieArboreaRequestDto } from './dto/create-especie_arborea_request.dto';
import { UpdateEspecieArboreaRequestDto } from './dto/update-especie_arborea_request.dto';
import { AceptarEspecieArboreaRequestDto } from './dto/aceptar-especie-arborea-request.dto';
import { RechazarEspecieArboreaRequestDto } from './dto/rechazar-especie-arborea.dto';
import { FormDataRequest } from 'nestjs-form-data';

@Controller()
export class EspecieArboreaRequestController {
  constructor(private readonly especieArboreaRequestService: EspecieArboreaRequestService) {}

  @Post('crearEspecieArborea')
  @FormDataRequest()
  async crearEspecie(@Body() nuevoEspeciearboreadto: CreateEspecieArboreaRequestDto){
    for(let i in nuevoEspeciearboreadto){
      if(nuevoEspeciearboreadto[i] == "" || nuevoEspeciearboreadto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    if(nuevoEspeciearboreadto.hasOwnProperty('file')){
      const file = nuevoEspeciearboreadto['file'];
      delete nuevoEspeciearboreadto['file'];
      console.log(file);
      
      return this.especieArboreaRequestService.crearEspecieArborea(nuevoEspeciearboreadto, file);
    }else{
      return this.especieArboreaRequestService.crearEspecieArborea(nuevoEspeciearboreadto);
    }
  }

  @Get('especieArborea')
  async usuariosToRoles(){
    return this.especieArboreaRequestService.buscarEspecieArborea()
  }


  @Post('editarEspecieArborea')
  @FormDataRequest()
  async editarespecieArborea(@Body() nuevoEspeciearboreadto: UpdateEspecieArboreaRequestDto){
    for(let i in nuevoEspeciearboreadto){
      if(nuevoEspeciearboreadto[i] == "" || nuevoEspeciearboreadto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    if(nuevoEspeciearboreadto.hasOwnProperty('file')){
      const file = nuevoEspeciearboreadto['file'];
      delete nuevoEspeciearboreadto['file'];
      console.log(file);
      
      return this.especieArboreaRequestService.editarEspecieArborea(nuevoEspeciearboreadto, file);
    }else{
      return this.especieArboreaRequestService.editarEspecieArborea(nuevoEspeciearboreadto);
    }
  }


  @Post('eliminarEspecieArborea')
  async eliminarespecieArborea(@Body() nuevoEspeciearboreadto: UpdateEspecieArboreaRequestDto){
    for(let i in nuevoEspeciearboreadto){
      if(nuevoEspeciearboreadto[i] == "" || nuevoEspeciearboreadto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    return this.especieArboreaRequestService.eliminarEspecieArborea(nuevoEspeciearboreadto)
  }
  
  @Post('aceptarRequest')
  async aceptarespecieArborea(@Body() nuevoEspeciearboreadto: AceptarEspecieArboreaRequestDto){
    for(let i in nuevoEspeciearboreadto){
      if(nuevoEspeciearboreadto[i] == "" || nuevoEspeciearboreadto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    return this.especieArboreaRequestService.aceptarRequest(nuevoEspeciearboreadto)
  }


  @Post('rechazarRequest')
  async rechazarespecieArborea(@Body() nuevoEspeciearboreadto: RechazarEspecieArboreaRequestDto){
    for(let i in nuevoEspeciearboreadto){
      if(nuevoEspeciearboreadto[i] == "" || nuevoEspeciearboreadto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    return this.especieArboreaRequestService.rechazarRequest(nuevoEspeciearboreadto)
  }
  @Get('estadistica')
  async estadistica(){
    return this.especieArboreaRequestService.estadisticas()
  }
  
}
