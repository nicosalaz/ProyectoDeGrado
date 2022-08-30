import { PartialType } from '@nestjs/mapped-types';
import { CreateIdentificacionDto } from './create-identificacion.dto';

export class UpdateIdentificacionDto extends PartialType(CreateIdentificacionDto) {
    id: number;
}
