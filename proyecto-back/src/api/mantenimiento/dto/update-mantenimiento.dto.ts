import { PartialType } from '@nestjs/mapped-types';
import { CreateMantenimientoDto } from './create-mantenimiento.dto';

export class UpdateMantenimientoDto extends PartialType(CreateMantenimientoDto) {
    id: number;
    active?:boolean;
    id_empleado?:number;
}
