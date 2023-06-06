import { Injectable } from '@nestjs/common';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';
import { MantenimientoRepository } from './mantenimiento.repository';

@Injectable()
export class MantenimientoService {
  constructor(private readonly mantenimientoService: MantenimientoRepository) {}

  create(createMan: CreateMantenimientoDto, file:Express.Multer.File = null){
    return this.mantenimientoService.crearMantenimiento(createMan, file);
  }

  update(update: UpdateMantenimientoDto, file:Express.Multer.File = null){
    return this.mantenimientoService.actualizarMantenimiento(update,file);
  }

  allMantenimiento(){
    return this.mantenimientoService.allMantenimientos();
  }

  matenimientoUsuario(id_usuario){
    return this.mantenimientoService.mantenimientosUsuario(id_usuario);
  }

  delete(id_usuario){
    return this.mantenimientoService.eliminarMantenimiento(id_usuario);
  }

  asignar(id_usuario,id_mantenimiento){
    return this.mantenimientoService.asignarMantenimiento(id_usuario, id_mantenimiento);
  }
}
