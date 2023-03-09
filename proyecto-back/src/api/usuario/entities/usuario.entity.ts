import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario extends AuditableEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  id_identificacion: number;

  @Column()
  numero_identificacion: number;

  @Column()
  correo: string;

  @Column()
  usuario: string;

  @Column()
  clave: string;

  @Column()
  descripcion: string;

  @Column()
  ciudad: string;

  @Column()
  telefono: number;


  permissions:string[];
  rol:string;
}
