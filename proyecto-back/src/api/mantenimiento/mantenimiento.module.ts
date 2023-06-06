import { Module } from '@nestjs/common';
import { MantenimientoService } from './mantenimiento.service';
import { MantenimientoController } from './mantenimiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mantenimiento } from './entities/mantenimiento.entity';
import { ComentarioEspecieArborea } from './entities/especie_arborea_comentario.entity';
import { MantenimientoRepository } from './mantenimiento.repository';
import { S3Module } from '../s3/s3.module';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports: [
    TypeOrmModule.forFeature([
    Mantenimiento,
    ComentarioEspecieArborea
  ]),
  S3Module, 
  NestjsFormDataModule
],
  controllers: [MantenimientoController],
  providers: [MantenimientoService, MantenimientoRepository]
})
export class MantenimientoModule {}
