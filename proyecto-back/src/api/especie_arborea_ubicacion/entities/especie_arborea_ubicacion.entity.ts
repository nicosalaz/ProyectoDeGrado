import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';

import {
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  Entity,
  JoinColumn,
} from 'typeorm';


@Entity('especie_arborea_ubicacion')
export class EspecieArboreaUbicacion extends AuditableEntity{
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitud: string;

  @Column()
  longitud: string;

  @Column() //nombre de la columba que almacena la llave foranea
  id_especie_arborea: number;
}
