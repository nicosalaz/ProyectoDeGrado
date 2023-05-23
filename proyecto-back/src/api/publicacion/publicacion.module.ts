import { Module } from '@nestjs/common';
import { PublicacionService } from './publicacion.service';
import { PublicacionController } from './publicacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacion } from './entities/publicacion.entity';
import { PublicacionRepository } from './repository/publicacion.repository';
import { S3Module } from '../s3/s3.module';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports: [TypeOrmModule.forFeature([Publicacion]),
  S3Module, 
  NestjsFormDataModule],
  controllers: [PublicacionController],
  providers: [PublicacionService, PublicacionRepository]
})
export class PublicacionModule {}
