import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';
import { Publicacion } from './entities/publicacion.entity';

@Injectable()
export class PublicacionService {
  constructor(
    @InjectRepository(Publicacion)
    private publicacionRepository: Repository<Publicacion>,
  ) {}

  findAll() {
    return this.publicacionRepository.find();
  }

  async findOne(id: number): Promise<Publicacion> {
    return await this.publicacionRepository.findOneBy({id});
  }

  async update(updatePublicacionDtoList: UpdatePublicacionDto[]) : Promise<Publicacion[]> {
    return await this.publicacionRepository.save(updatePublicacionDtoList);
  }
}
