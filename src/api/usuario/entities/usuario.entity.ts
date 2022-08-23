import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre : string;

    @Column()
    apellido : string;

    @Column()
    numero_documento : number;

    @Column()
    usuario : string;

    @Column()
    clave: string;
}
