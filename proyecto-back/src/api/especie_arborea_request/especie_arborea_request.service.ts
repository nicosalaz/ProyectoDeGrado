import { Injectable } from '@nestjs/common';
import { CreateEspecieArboreaRequestDto } from './dto/create-especie_arborea_request.dto';
import { UpdateEspecieArboreaRequestDto } from './dto/update-especie_arborea_request.dto';
import { EspecieArboreaRequestRepository } from './especie_arborea_reques.repository';
import { AceptarEspecieArboreaRequestDto } from './dto/aceptar-especie-arborea-request.dto';
import { RechazarEspecieArboreaRequestDto } from './dto/rechazar-especie-arborea.dto';

@Injectable()
export class EspecieArboreaRequestService {
  constructor(private readonly especieArboreaService: EspecieArboreaRequestRepository) {}

  async crearEspecieArborea(especieArborea:CreateEspecieArboreaRequestDto, file: Express.Multer.File = null){
    return this.especieArboreaService.createEspecieArborea(especieArborea, file)
  }

  async buscarEspecieArborea(){
    return this.especieArboreaService.especieArborea();
  }

  async editarEspecieArborea(especieArborea:UpdateEspecieArboreaRequestDto, file: Express.Multer.File = null){
    return this.especieArboreaService.editarEspecieArborea(especieArborea, file)
  }

  async eliminarEspecieArborea(especieArborea:UpdateEspecieArboreaRequestDto){
    return this.especieArboreaService.eliminarEspecieArborea(especieArborea)
  }

  async aceptarRequest(request:AceptarEspecieArboreaRequestDto){
    return this.especieArboreaService.acpetarEspecieArborea(request);
  }

  async rechazarRequest(request:RechazarEspecieArboreaRequestDto){
    return this.especieArboreaService.rechazarEspecieArborea(request);
  }

  async estadisticas(){
    return this.especieArboreaService.estadisticas();
  }
}
