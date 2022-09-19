import { Usuario } from 'src/api/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  Long,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('peticion_registro')
export class PeticionesRegistro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  peticion_registro: number;

  @Column()
  estado_peticion: string;

  @Column()
  usuario_id: number;

  @Column()
  imagen_arbol: string;

  @Column()
  ubicacion: string;

  @Column()
  usuario_asignado_id: string;

  @Column()
  is_active: boolean;
}
