import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('especie_arborea')
export class EspecieArborea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_especie_arborea: string;

  @Column()
  especie_id: number;

  @Column()
  descripcion: string;

  @Column()
  comentarios: string;

  @Column()
  peticion_registro_id: number;

  @Column()
  is_active: boolean;
}
