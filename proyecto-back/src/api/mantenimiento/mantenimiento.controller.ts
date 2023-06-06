import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MantenimientoService } from './mantenimiento.service';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';
import { FormDataRequest } from 'nestjs-form-data';

@Controller()
export class MantenimientoController {
  constructor(private readonly mantenimientoService: MantenimientoService) {}

  @Post('create')
  @FormDataRequest()
  create(@Body() createMantenimientoDto: CreateMantenimientoDto) {
    if(createMantenimientoDto.hasOwnProperty('file')){
      const file = createMantenimientoDto['file'];
      delete createMantenimientoDto['file'];
      console.log(file);
      
      return this.mantenimientoService.create(createMantenimientoDto, file);
    }else{
      return this.mantenimientoService.create(createMantenimientoDto);
    }
  }

  @Get()
  async allmantenimiento(){
    return await this.mantenimientoService.allMantenimiento()
  }

  @Get('matenimientoUsuario/:id')
  async publicacioneUsuario(@Param('id') id:number){
    return await this.mantenimientoService.matenimientoUsuario(id)
  }

  @Post('eliminar/:id')
  async eliminar(@Param('id') id:number){
    return await this.mantenimientoService.delete(id)
  }

  @Patch('actualizar')
  @FormDataRequest()
  async actualizarPubli(@Body() crearPublicacion: UpdateMantenimientoDto){
    if(crearPublicacion.hasOwnProperty('file')){
      const file = crearPublicacion['file'];
      delete crearPublicacion['file'];
      console.log(file);
      
      return this.mantenimientoService.update(crearPublicacion, file);
    }else{
      return this.mantenimientoService.update(crearPublicacion);
    }
    
  }

  @Post('asingar/:id')
  async asignar(@Param('id') id:number, @Body() id_usuario:any){
    return await this.mantenimientoService.asignar(id_usuario.id_usuario,id)
  }

  
}
