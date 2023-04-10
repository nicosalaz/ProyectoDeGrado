import { AuditableEntity } from "src/shared/entitites/extendes/auditable-entity.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('especie_arborea_request')
export class EspecieArboreaRequest extends AuditableEntity{

    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()//nombre de la columba que almacena la llave foranea
  id_especie: number;


  @Column()
  longitud: string;

  @Column()
  latitud: string;

  @Column()//nombre de la columba que almacena la llave foranea
  id_usuario: number;

  @Column()
  aceptado_por:number;
  
  @Column()
  rechazado_por:number;

  @Column()
  justificacion_rechazo:string;
}
