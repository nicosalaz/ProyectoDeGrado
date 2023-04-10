import { Especie } from 'src/api/especie/entities/especie.entity';
import { PeticionesRegistro } from 'src/api/peticiones_registro/entities/peticiones_registro.entity';
import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Transform } from 'stream';
import {
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  Entity,
  JoinColumn,
} from 'typeorm';

@Entity('especie_arborea') /* decorador necesario para reconocer una clase como una entidad de la bd*/
export class EspecieArborea extends AuditableEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()//nombre de la columba que almacena la llave foranea
  id_especie: number;
}
