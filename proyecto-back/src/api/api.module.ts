import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { EspecieModule } from './especie/especie.module';
import { EspecieArboreaModule } from './especie_arborea/especie_arborea.module';
import { PeticionesRegistroModule } from './peticiones_registro/peticiones_registro.module';
import { RolModule } from './rol/rol.module';
import { PermisoModule } from './permiso/permiso.module';
import { IdentificacionModule } from './identificacion/identificacion.module';
import { PublicacionModule } from './publicacion/publicacion.module';
import { EspecieArboreaUbicacionModule } from './especie_arborea_ubicacion/especie_arborea_ubicacion.module';
import { UsuarioRolModule } from './usuario-rol/usuario-rol.module';
import { ReaccionModule } from './reaccion/reaccion.module';
import { ComentarioModule } from './comentario/comentario.module';

@Module({
  imports: [
    UsuarioModule, 
    EspecieModule, 
    EspecieArboreaModule, 
    PeticionesRegistroModule, 
    RolModule, 
    PermisoModule, IdentificacionModule, PublicacionModule, EspecieArboreaUbicacionModule, UsuarioRolModule, ReaccionModule, ComentarioModule]
})
export class ApiModule {}
