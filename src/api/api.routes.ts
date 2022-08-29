import { EspecieModule } from './especie/especie.module';
import { EspecieArboreaModule } from './especie_arborea/especie_arborea.module';
import { UsuarioModule } from './usuario/usuario.module';

export const apiRoutes = [
    {
        path: 'usuario',
        module: UsuarioModule,
      },{
        path: 'especie',
        module: EspecieModule,
      },{
        path: 'especie-arborea',
        module: EspecieArboreaModule,
      }
];