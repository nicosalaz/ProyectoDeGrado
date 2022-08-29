import { PartialType } from '@nestjs/mapped-types';
import { CreatePeticionesRegistroDto } from './create-peticiones_registro.dto';

export class UpdatePeticionesRegistroDto extends PartialType(
  CreatePeticionesRegistroDto,
) {
  id: number;
}
