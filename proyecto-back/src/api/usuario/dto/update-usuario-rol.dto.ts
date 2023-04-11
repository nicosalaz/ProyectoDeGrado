import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioRolDto } from './create-usuario-rol.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioRolDto) {
    id: number;
}
