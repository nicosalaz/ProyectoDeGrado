import { Module } from '@nestjs/common';
import { EspecieArboreaService } from './especie-arborea.service';
import { EspecieArboreaController } from './especie-arborea.controller';
import { EspecieArborea } from './entities/especie-arborea.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EspecieArborea])],
  controllers: [EspecieArboreaController],
  providers: [EspecieArboreaService],
})
export class EspecieArboreaModule {}
