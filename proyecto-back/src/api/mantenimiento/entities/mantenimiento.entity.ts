import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

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

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'usuario_id' })
  usuario_id: number;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'usuario_asignado_id' })
  usuario_asignado_id: number;

  @Column()
  is_active: boolean;
}
