import { Especie } from 'src/api/especie/entities/especie.entity';

export class CreateEspecieArboreaDto {
  nombre_especie_arborea: string;

  descripcion: string;

  comentarios: string;

  fk_id_especie: number;
}
