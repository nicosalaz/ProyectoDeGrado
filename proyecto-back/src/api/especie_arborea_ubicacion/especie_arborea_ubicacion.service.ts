import { Injectable } from '@nestjs/common';
import { CreateEspecieArboreaUbicacionDto } from './dto/create-especie_arborea_ubicacion.dto';
import { UpdateEspecieArboreaUbicacionDto } from './dto/update-especie_arborea_ubicacion.dto';

@Injectable()
export class EspecieArboreaUbicacionService {
  create(createEspecieArboreaUbicacionDto: CreateEspecieArboreaUbicacionDto) {
    return 'This action adds a new especieArboreaUbicacion';
  }

  findAll() {
    return `This action returns all especieArboreaUbicacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} especieArboreaUbicacion`;
  }

  update(id: number, updateEspecieArboreaUbicacionDto: UpdateEspecieArboreaUbicacionDto) {
    return `This action updates a #${id} especieArboreaUbicacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} especieArboreaUbicacion`;
  }
}
