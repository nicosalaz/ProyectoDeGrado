import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('especie')
export class Especie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_especie: string;

  @Column()
  descripcion_especie: string;

  @Column()
  is_active: boolean;
}
