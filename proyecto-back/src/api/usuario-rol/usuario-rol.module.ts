import { Module } from '@nestjs/common';
import { UsuarioRolService } from './usuario-rol.service';
import { UsuarioRolController } from './usuario-rol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRol } from './entities/usuario-rol.entity';
import { UsuarioRepository } from './repository/usuario.repository';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario,
      UsuarioRol
    ]),
  ],
  controllers: [UsuarioRolController],
  providers: [UsuarioRolService, UsuarioRepository]
})
export class UsuarioRolModule {}
