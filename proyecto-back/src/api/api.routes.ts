import { EspecieModule } from './especie/especie.module';
import { EspecieArboreaModule } from './especie_arborea/especie_arborea.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { PermisoModule } from './permiso/permiso.module';
import { IdentificacionModule } from './identificacion/identificacion.module';
import { PublicacionModule } from './publicacion/publicacion.module';

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
      }
];