import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
import { Permiso } from './entities/permiso.entity';

@Injectable()
export class PermisoService {
  constructor(
    @InjectRepository(Permiso)
    private permisoRepository: Repository<Permiso>,
  ) {}

  findAll() {
    return this.permisoRepository.find();
  }

  async findOne(id: number): Promise<Permiso> {
    return await this.permisoRepository.findOneBy({id});
  }

  async update(updatePermisoDtoList: UpdatePermisoDto[]) : Promise<Permiso[]> {
    return await this.permisoRepository.save(updatePermisoDtoList);
  }
}
