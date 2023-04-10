import { Module } from '@nestjs/common';
import { EspecieArboreaUbicacionService } from './especie_arborea_ubicacion.service';
import { EspecieArboreaUbicacionController } from './especie_arborea_ubicacion.controller';
import { EspecieArboreaUbicacion } from './entities/especie_arborea_ubicacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecieArboreaUbicacionRepository } from './especie-arborea-ubicacion.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([EspecieArboreaUbicacion]),
  ],
  controllers: [EspecieArboreaUbicacionController],
  providers: [EspecieArboreaUbicacionService, EspecieArboreaUbicacionRepository],
  exports:[
    EspecieArboreaUbicacionRepository
  ]
})
export class EspecieArboreaUbicacionModule {}
