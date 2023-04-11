import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEspecieArboreaDto } from './dto/create-especie_arborea.dto';
import { UpdateEspecieArboreaDto } from './dto/update-especie_arborea.dto';
import { EspecieArborea } from './entities/especie_arborea.entity';
import { EspecieArboreaRepository } from './repository/especie_arborea.reposirory';

@Injectable()
export class EspecieArboreaService {
  constructor(private readonly especieArboreaService: EspecieArboreaRepository) {}

  async crearEspecieArborea(especieArborea:CreateEspecieArboreaDto){
    return this.especieArboreaService.createEspecieArborea(especieArborea)
  }

  async buscarEspecieArborea(){
    return this.especieArboreaService.especieArborea();
  }

  async editarEspecieArborea(especieArborea:UpdateEspecieArboreaDto){
    return this.especieArboreaService.editarEspecieArborea(especieArborea)
  }

  async eliminarEspecieArborea(especieArborea:UpdateEspecieArboreaDto){
    return this.especieArboreaService.eliminarEspecieArborea(especieArborea)
  }
}
