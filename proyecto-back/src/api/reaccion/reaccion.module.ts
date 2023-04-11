import { Module } from '@nestjs/common';
import { ReaccionService } from './reaccion.service';
import { ReaccionController } from './reaccion.controller';
import { ReaccionRepository } from './repository/reaccion.repository';
import { Reaccion } from './entities/reaccion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Reaccion])],
  controllers: [ReaccionController],
  providers: [ReaccionService, ReaccionRepository]
})
export class ReaccionModule {}
