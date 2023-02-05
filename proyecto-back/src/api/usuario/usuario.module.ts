import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Usuario } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepository } from './repositories/usuario.repository';
import { UsuarioRol } from './entities/usuario-rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario,UsuarioRol])
],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioRepository],
  exports:[UsuarioService]
})
export class UsuarioModule {}
