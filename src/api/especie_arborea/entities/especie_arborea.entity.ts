import { Especie } from 'src/api/especie/entities/especie.entity';
import { PeticionesRegistro } from 'src/api/peticiones_registro/entities/peticiones_registro.entity';
import { Transform } from 'stream';
import {
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  Entity,
  JoinColumn,
} from 'typeorm';

@Entity() /* decorador necesario para reconocer una clase como una entidad de la bd*/
export class EspecieArborea {
  @PrimaryGeneratedColumn()
  id_especie_arborea: number;

  @Column()
  nombre_especie_arborea: string;
  @Column()
  descripcion: string;
  @Column()
  comentarios: string;
  @OneToOne(() => PeticionesRegistro)
  @JoinColumn()
  fk_id_perticion: PeticionesRegistro;
  /*
   * variable que almacena ed id del objeto relacionado
   * se le pasa como parametro el objeto del tipo que va ha almacenar
   */
  @ManyToOne(() => Especie, {
    eager: true,
  })
  @JoinColumn({ name: 'fk_id_especie' }) //nombre de la columba que almacena la llave foranea
  fkIdEspecie: Especie;
}
