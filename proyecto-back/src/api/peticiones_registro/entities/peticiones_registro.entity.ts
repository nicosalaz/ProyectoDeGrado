import { Usuario } from 'src/api/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  Long,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JoinAttribute } from 'typeorm/query-builder/JoinAttribute';

@Entity()
export class PeticionesRegistro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  peticion_registro: number;

  @Column()
  estado_peticion: string;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'usuario_id' })
  usuario_id: Usuario;

  @Column()
  imagen_arbol: string;

  @Column()
  ubicacion: string;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'usuario_asignado_id' })
  usuario_asignado_id: Usuario;

  @Column()
  is_active: boolean;
}
