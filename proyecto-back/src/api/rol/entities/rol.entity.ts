import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permiso } from '../../permiso/entities/permiso.entity';

@Entity('rol')
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_rol: string;

  @Column()
  descripcion_rol: string;

  @ManyToOne(() => Permiso, { eager: true })
  @JoinColumn({ name: 'permiso_id' })
  permiso_id: number;

  @Column()
  is_active: number;
}
