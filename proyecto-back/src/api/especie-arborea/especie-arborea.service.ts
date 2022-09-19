import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEspecieArboreaDto } from './dto/create-especie-arborea.dto';
import { UpdateEspecieArboreaDto } from './dto/update-especie-arborea.dto';
import { EspecieArborea } from './entities/especie-arborea.entity';

@Injectable()
export class EspecieArboreaService {
  constructor(
    @InjectRepository(EspecieArborea)
    private especieArboreaRepository: Repository<EspecieArborea>,
  ) {}

  findAll() {
    return this.especieArboreaRepository.find();
  }

  async findOne(id: number): Promise<EspecieArborea> {
    return await this.especieArboreaRepository.findOneBy({ id });
  }

  async update(
    updateEspecieArboreaDtoList: UpdateEspecieArboreaDto[],
  ): Promise<EspecieArborea[]> {
    return await this.especieArboreaRepository.save(
      updateEspecieArboreaDtoList,
    );
  }
}
