import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIdentificacionDto } from './dto/create-identificacion.dto';
import { UpdateIdentificacionDto } from './dto/update-identificacion.dto';
import { Identificacion } from './entities/identificacion.entity';

@Injectable()
export class IdentificacionService {
  constructor(
    @InjectRepository(Identificacion)
    private identificacionRepository: Repository<Identificacion>,
  ) {}

  findAll() {
    return this.identificacionRepository.find();
  }

  async findOne(id: number): Promise<Identificacion> {
    return await this.identificacionRepository.findOneBy({id});
  }

  async update(updateIdentificacionDtoList: UpdateIdentificacionDto[]) : Promise<Identificacion[]> {
    return await this.identificacionRepository.save(updateIdentificacionDtoList);
  }
}
