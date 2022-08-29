import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { EspecieModule } from './especie/especie.module';
import { EspecieArboreaModule } from './especie_arborea/especie_arborea.module';
import { PeticionesRegistroModule } from './peticiones_registro/peticiones_registro.module';

@Module({
  imports: [UsuarioModule, EspecieModule, EspecieArboreaModule, PeticionesRegistroModule]
})
export class ApiModule {}
