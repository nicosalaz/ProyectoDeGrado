import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';
import { Mantenimiento } from './entities/mantenimiento.entity';

@Injectable()
export class MantenimientoService {
  constructor(
    @InjectRepository(Mantenimiento)
    private mantenimientoRepository: Repository<Mantenimiento>,
  ) {}

  findAll() {
    return this.mantenimientoRepository.find();
  }

  async findOne(id: number): Promise<Mantenimiento> {
    return await this.mantenimientoRepository.findOneBy({ id });
  }

  async update(
    updateMatenimientoDtoList: UpdateMantenimientoDto[],
  ): Promise<Mantenimiento[]> {
    return await this.mantenimientoRepository.save(updateMatenimientoDtoList);
  }
}
