import { Module } from '@nestjs/common';
import { PeticionesRegistroService } from './peticiones_registro.service';
import { PeticionesRegistroController } from './peticiones_registro.controller';

@Module({
  controllers: [PeticionesRegistroController],
  providers: [PeticionesRegistroService]
})
export class PeticionesRegistroModule {}
