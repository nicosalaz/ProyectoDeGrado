import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEspecieDto } from './dto/create-especie.dto';
import { UpdateEspecieDto } from './dto/update-especie.dto';
import { Especie } from './entities/especie.entity';

@Injectable()
export class EspecieService {
  constructor(
    @InjectRepository(Especie)
    private especieRepository: Repository<Especie>,
  ) {}

  findAll() {
    return this.especieRepository.find();
  }

  async findOne(id: number): Promise<Especie> {
    return await this.especieRepository.findOneBy({ id });
  }
}
