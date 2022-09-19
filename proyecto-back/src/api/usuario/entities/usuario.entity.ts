import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Rol } from '../../rol/entities/rol.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  identificacion_id: number;

  @Column()
  numero_identificacion: number;

  @Column()
  numero_telefono: string;

  @Column()
  usuario: string;

  @Column()
  clave: string;

  @ManyToOne(() => Rol, { eager: true })
  @JoinColumn({ name: 'rol_id' })
  rol_id: number;

  @Column()
  is_active: number;
}
