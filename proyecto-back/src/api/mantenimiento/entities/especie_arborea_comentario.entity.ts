import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comentario_especie_arborea')
export class ComentarioEspecieArborea extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column()
    id_especie_arborea: number;

    @Column()
    id_usuario: number;

    @Column()
    estado: string;

    @Column()
    id_matenimiento: number;
}
