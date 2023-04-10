import { PartialType } from '@nestjs/mapped-types';
import { CreateEspecieArboreaRequestDto } from './create-especie_arborea_request.dto';

export class UpdateEspecieArboreaRequestDto extends PartialType(CreateEspecieArboreaRequestDto) {
    id:number;
    active?:boolean;
}
