import { PartialType } from '@nestjs/mapped-types';
import { CreateEspecieArboreaDto } from './create-especie-arborea.dto';

export class UpdateEspecieArboreaDto extends PartialType(
  CreateEspecieArboreaDto,
) {
  id: number;
}
