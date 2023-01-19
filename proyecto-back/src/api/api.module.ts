import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { EspecieModule } from './especie/especie.module';
import { PeticionesRegistroModule } from './peticiones_registro/peticiones_registro.module';
import { RolModule } from './rol/rol.module';
import { PermisoModule } from './permiso/permiso.module';
import { IdentificacionModule } from './identificacion/identificacion.module';
import { PublicacionModule } from './publicacion/publicacion.module';
import { EspecieArboreaModule } from './especie-arborea/especie-arborea.module';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';
import { EspecieArboreaUbicacionModule } from './especie_arborea_ubicacion/especie_arborea_ubicacion.module';

@Module({
  imports: [
    UsuarioModule, 
    EspecieModule, 
    EspecieArboreaModule, 
    PeticionesRegistroModule, 
    RolModule, 
    PermisoModule, IdentificacionModule, PublicacionModule]
})
export class ApiModule {}
