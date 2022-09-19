import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePeticionesRegistroDto } from './dto/create-peticiones_registro.dto';
import { UpdatePeticionesRegistroDto } from './dto/update-peticiones_registro.dto';
import { PeticionesRegistro } from './entities/peticiones_registro.entity';

@Injectable()
export class PeticionesRegistroService {
  constructor(
    @InjectRepository(PeticionesRegistro)
    private peticionRegistroRepository: Repository<PeticionesRegistro>,
  ) {}

  findAll() {
    return this.peticionRegistroRepository.find();
  }

  async findOne(id: number): Promise<PeticionesRegistro> {
    return await this.peticionRegistroRepository.findOneBy({ id });
  }

  async update(
    updatePublicacionDtoList: UpdatePeticionesRegistroDto[],
  ): Promise<PeticionesRegistro[]> {
    return await this.peticionRegistroRepository.save(updatePublicacionDtoList);
  }
}
