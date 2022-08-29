import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EspecieArborea } from 'src/api/especie_arborea/entities/especie_arborea.entity';

@Entity()
export class Especie {
  @PrimaryGeneratedColumn()
  id_especie: number;
  @Column()
  nombre_especie: string;
  @Column()
  descripcion_especie: string;
  @Column()
  isActive: boolean;
}
