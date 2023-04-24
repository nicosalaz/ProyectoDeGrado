import { Module } from '@nestjs/common';
import { UsuarioRolService } from './usuario-rol.service';
import { UsuarioRolController } from './usuario-rol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRol } from './entities/usuario-rol.entity';
import { UsuarioRepository } from './repository/usuario.repository';
import { Usuario } from './entities/usuario.entity';
import { S3Module } from '../s3/s3.module';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario,
      UsuarioRol
    ]),
    S3Module, 
    NestjsFormDataModule
  ],
  controllers: [UsuarioRolController],
  providers: [UsuarioRolService, UsuarioRepository]
})
export class UsuarioRolModule {}
