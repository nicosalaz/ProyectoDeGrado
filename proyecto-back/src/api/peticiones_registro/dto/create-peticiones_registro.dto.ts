import { Usuario } from 'src/api/usuario/entities/usuario.entity';

export class CreatePeticionesRegistroDto {
  nombre: string;

  descripcion :string;

   id_especie: number;

  id_especie_arborea: number;

  id_usuario :number;

  longitud :string;

  latitud: string;

  aceptado_por: number;

  rechazado_por: number;

  justificacion_rechazo: string;
}
