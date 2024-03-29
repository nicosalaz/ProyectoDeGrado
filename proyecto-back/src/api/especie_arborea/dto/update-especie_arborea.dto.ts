import { PartialType } from '@nestjs/mapped-types';
import { CreateEspecieArboreaDto } from './create-especie_arborea.dto';

export class UpdateEspecieArboreaDto extends PartialType(CreateEspecieArboreaDto) {
    id:number;
    active?:boolean;
}
