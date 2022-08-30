import { Injectable } from '@nestjs/common';
import { CreatePeticionesRegistroDto } from './dto/create-peticiones_registro.dto';
import { UpdatePeticionesRegistroDto } from './dto/update-peticiones_registro.dto';

@Injectable()
export class PeticionesRegistroService {
  create(createPeticionesRegistroDto: CreatePeticionesRegistroDto) {
    return 'This action adds a new peticionesRegistro';
  }

  findAll() {
    return `This action returns all peticionesRegistro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} peticionesRegistro`;
  }

  update(id: number, updatePeticionesRegistroDto: UpdatePeticionesRegistroDto) {
    return `This action updates a #${id} peticionesRegistro`;
  }

  remove(id: number) {
    return `This action removes a #${id} peticionesRegistro`;
  }
}
