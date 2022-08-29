import { Module } from '@nestjs/common';
import { EspecieArboreaService } from './especie_arborea.service';
import { EspecieArboreaController } from './especie_arborea.controller';
import { EspecieArborea } from './entities/especie_arborea.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especie } from '../especie/entities/especie.entity';
import { PeticionesRegistro } from '../peticiones_registro/entities/peticiones_registro.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EspecieArborea, Especie, PeticionesRegistro]),
  ],
  controllers: [EspecieArboreaController],
  providers: [EspecieArboreaService],
})
export class EspecieArboreaModule {}
