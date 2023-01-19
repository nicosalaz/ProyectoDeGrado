import { Module } from '@nestjs/common';
import { EspecieArboreaUbicacionService } from './especie_arborea_ubicacion.service';
import { EspecieArboreaUbicacionController } from './especie_arborea_ubicacion.controller';

@Module({
  controllers: [EspecieArboreaUbicacionController],
  providers: [EspecieArboreaUbicacionService]
})
export class EspecieArboreaUbicacionModule {}
