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

  async getUserPermissions(user: Usuario): Promise<string[] | undefined> {
    const permissions_result: any = await this.usersRepository.query(
      'call getUsuariosPermisos(?)',
      [user.id],
    );

    let permissions: string[] = [];

    if (permissions_result[0]?.constructor.name === Array.name) {
      permissions = permissions_result[0]
        .map((rdp) => rdp.permission_route as string)
        .filter((p) => p);
    }

    return permissions.length == 0 ? undefined : permissions;
  }

  async findOneByEmail(correo: string, isService = true): Promise<Usuario> {
    const user: Usuario = await this.usersRepository.findOneBy({ correo });
    if (user) {
      user.permissions = await this.getUserPermissions(user);
    }

    if (isService) {
      delete user.clave;
    }

    return user;
  }

  async findOneByUsername(usuario: string, isService = false): Promise<Usuario> {
    const user: Usuario = await this.usersRepository.findOneBy({ usuario });
    if (user) {
      user.permissions = await this.getUserPermissions(user);
    }

    if (isService) {
      delete user.clave;
    }

    return user;
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.usersRepository.findOneBy({id});
  }

  async update(updateUserDtoList: UpdateUsuarioDto[]) : Promise<Usuario[]> {
    return await this.usersRepository.save(updateUserDtoList);
  }
}
