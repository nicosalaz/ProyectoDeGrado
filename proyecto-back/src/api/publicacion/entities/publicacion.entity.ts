import { Usuario } from 'src/api/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('publicacion')
export class Publicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'usuario_id' })
  usuario_id: number;

  @Column()
  puclicacion_id: number;

  @Column()
  is_active: number;
}
