import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Especie } from '../../especie/entities/especie.entity';
import { PeticionesRegistro } from '../../peticiones_registro/entities/peticiones_registro.entity';

@Entity('especie_arborea')
export class EspecieArborea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_especie_arborea: string;

  @ManyToOne(() => Especie, { eager: true })
  @JoinColumn({ name: 'especie_id' })
  especie_id: number;

  @Column()
  descripcion: string;

  @Column()
  comentarios: string;

  @ManyToOne(() => PeticionesRegistro, { eager: true })
  @JoinColumn({ name: 'peticion_registro_id' })
  peticion_registro_id: number;

  @Column()
  is_active: boolean;
}
