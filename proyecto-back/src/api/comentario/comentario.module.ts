import { Module } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { ComentarioController } from './comentario.controller';
import { Comentario } from './entities/comentario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentarioRepository } from './repository/comentario.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario])],
  controllers: [ComentarioController],
  providers: [ComentarioService, ComentarioRepository]
})
export class ComentarioModule {}
