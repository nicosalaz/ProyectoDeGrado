import { Module } from '@nestjs/common';
import { IdentificacionService } from './identificacion.service';
import { IdentificacionController } from './identificacion.controller';
import { Identificacion } from './entities/identificacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Identificacion])],
  controllers: [IdentificacionController],
  providers: [IdentificacionService]
})
export class IdentificacionModule {}
