import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  identificacion_id: number;

  @Column()
  numero_identificacion: number;

  @Column()
  numero_telefono: string;

  @Column()
  usuario: string;

  @Column()
  clave: string;

  @Column()
  rol_id: number;

  @Column()
  is_active: number;
}
