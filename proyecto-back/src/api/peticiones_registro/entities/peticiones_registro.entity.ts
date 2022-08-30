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
  nombre_peticion: number;
  @Column()
  estado_peticion: string;
  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'id' })
  fk_id_usuario: Usuario;
  /*@Column()
  imagen_arbol: Long;
  @Column()
  ubicacion: JSON;*/
  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'id' })
  fk_id_personal_asignado: Usuario;
}
