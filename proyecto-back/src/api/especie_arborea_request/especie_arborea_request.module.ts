import { Module } from '@nestjs/common';
import { EspecieArboreaRequestService } from './especie_arborea_request.service';
import { EspecieArboreaRequestController } from './especie_arborea_request.controller';

import { EspecieArboreaRequest } from './entities/especie_arborea_request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecieArboreaRequestRepository } from './especie_arborea_reques.repository';
import { EspecieArboreaRepository } from '../especie_arborea/repository/especie_arborea.reposirory';
import { EspecieArboreaUbicacionService } from '../especie_arborea_ubicacion/especie_arborea_ubicacion.service';
import { EspecieArboreaUbicacionRepository } from '../especie_arborea_ubicacion/especie-arborea-ubicacion.repository';
import { S3Module } from '../s3/s3.module';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports: [
    TypeOrmModule.forFeature([EspecieArboreaRequest]),
    S3Module, 
    NestjsFormDataModule
  ],
  controllers: [EspecieArboreaRequestController],
  providers: [EspecieArboreaRequestService, EspecieArboreaRequestRepository, 
    EspecieArboreaRepository, EspecieArboreaUbicacionRepository],
  exports:[
    EspecieArboreaRequestService, 
    EspecieArboreaRequestRepository,
    EspecieArboreaRepository
  ]
})
export class EspecieArboreaRequestModule {}
