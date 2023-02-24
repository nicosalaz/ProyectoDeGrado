import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  Long,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { JoinAttribute } from 'typeorm/query-builder/JoinAttribute';

@Entity('especie_arborea_request')
export class PeticionesRegistro extends AuditableEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion :string;

  @Column()
   id_especie: number;

   @Column()
  id_especie_arborea: number;

  @Column()
  id_usuario :number;

  @Column()
  longitud :string;

  @Column()
  latitud: string;

  @Column()
  aceptado_por: number;

  @Column()
  rechazado_por: number;

  @Column()
  justificacion_rechazo: string;

}
