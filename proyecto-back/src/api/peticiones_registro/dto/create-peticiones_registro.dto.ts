import { Usuario } from 'src/api/usuario/entities/usuario.entity';

export class CreatePeticionesRegistroDto {
  id: number;
  nombre_peticion: number;
  estado_peticion: string;
  fk_id_usuario: Usuario;
  imagen_arbol: Blob;
  ubicacion: JSON;
  fk_id_personal_asignado: Usuario;
}
