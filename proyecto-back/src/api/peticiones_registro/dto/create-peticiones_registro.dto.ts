import { Usuario } from 'src/api/usuario/entities/usuario.entity';

export class CreatePeticionesRegistroDto {
  peticion_registro: number;

  estado_peticion: string;

  usuario_id: number;

  imagen_arbol: string;

  ubicacion: string;

  usuario_asignado_id: string;

  is_active: boolean;
}
