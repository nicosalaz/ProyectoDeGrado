import { Module } from '@nestjs/common';
import { PublicacionService } from './publicacion.service';
import { PublicacionController } from './publicacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacion } from './entities/publicacion.entity';
import { PublicacionRepository } from './repository/publicacion.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Publicacion])],
  controllers: [PublicacionController],
  providers: [PublicacionService, PublicacionRepository]
})
export class PublicacionModule {}
