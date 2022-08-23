import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { EspecieModule } from './especie/especie.module';

@Module({
  imports: [UsuarioModule, EspecieModule]
})
export class ApiModule {}
