import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mantenimiento')
export class Mantenimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  comentarios: string;

  @Column()
  imagen_arbol: string;

  @Column()
  usuario_id: number;

  @Column()
  usuario_asignado_id: number;

  @Column()
  is_active: boolean;
}
