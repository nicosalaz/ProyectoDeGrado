import { EspecieModule } from './especie/especie.module';
import { UsuarioModule } from './usuario/usuario.module';

export const apiRoutes = [
    {
        path: 'usuario',
        module: UsuarioModule,
      },{
        path: 'especie',
        module: EspecieModule,
      }
];