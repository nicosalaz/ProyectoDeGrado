import { Module } from '@nestjs/common';
import { PeticionesRegistroService } from './peticiones_registro.service';
import { PeticionesRegistroController } from './peticiones_registro.controller';
import { PeticionesRegistro } from './entities/peticiones_registro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PeticionesRegistro])],
  controllers: [PeticionesRegistroController],
  providers: [PeticionesRegistroService],
})
export class PeticionesRegistroModule {}
