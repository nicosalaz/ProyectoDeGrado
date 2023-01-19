import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { EspecieArborea } from '../../especie_arborea/entities/especie_arborea.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  Entity,
  JoinColumn,
} from 'typeorm';


@Entity('especie_arborea')
export class EspecieArboreaUbicacion extends AuditableEntity{
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitud: string;

  @Column()
  longitud: string;

  @ManyToOne(() => EspecieArborea, {
    eager: true,
  })
  @JoinColumn({ name: 'id_especie_arborea' }) //nombre de la columba que almacena la llave foranea
  id_especie_arborea: EspecieArborea;
}
