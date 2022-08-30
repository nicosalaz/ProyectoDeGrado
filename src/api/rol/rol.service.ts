import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
  ) {}

  findAll() {
    return this.rolRepository.find();
  }

  async findOne(id: number): Promise<Rol> {
    return await this.rolRepository.findOneBy({id});
  }

  async update(updateRolDtoList: UpdateRolDto[]) : Promise<Rol[]> {
    return await this.rolRepository.save(updateRolDtoList);
  }
}
