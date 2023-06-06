import { EspecieModule } from './especie/especie.module';
import { EspecieArboreaModule } from './especie_arborea/especie_arborea.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { PermisoModule } from './permiso/permiso.module';
import { IdentificacionModule } from './identificacion/identificacion.module';
import { PublicacionModule } from './publicacion/publicacion.module';
import { UsuarioRolModule } from './usuario-rol/usuario-rol.module';
import { ReaccionModule } from './reaccion/reaccion.module';
import { ComentarioModule } from './comentario/comentario.module';
import { EspecieArboreaRequestModule } from './especie_arborea_request/especie_arborea_request.module';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';

export const apiRoutes = [
    {
        path: 'usuario',
        module: UsuarioModule,
      },
      {
        path: 'especie',
        module: EspecieModule,
      },
      {
        path: 'especie-arborea',
        module: EspecieArboreaModule,
      },
      {
        path: 'rol',
        module: RolModule,
      },
      {
        path: 'permiso',
        module: PermisoModule,
      },
      {
        path: 'identificacion',
        module: IdentificacionModule,
      },
      {
        path: 'publicacion',
        module: PublicacionModule,
      },
      {
        path: 'usuarios',
        module: UsuarioRolModule,
      },
      {
        path: 'reaccion',
        module: ReaccionModule,
      },
      {
        path: 'comentario',
        module: ComentarioModule,
      },
      {
        path: 'especie-request',
        module: EspecieArboreaRequestModule,
      },
      {
        path: 'mantenimiento',
        module: MantenimientoModule,
      }
];