import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usersRepository: Repository<Usuario>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.usersRepository.findOneBy({id});
  }

  async update(updateUserDtoList: UpdateUsuarioDto[]) : Promise<Usuario[]> {
    return await this.usersRepository.save(updateUserDtoList);
  }
}
