import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AuditableEntity {

  @Exclude({ toPlainOnly: true })
  @Column()
  modificado_por: number;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'text' })
  justificacion_modificacion: string;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'tinyint' })
  activo: boolean;

}
