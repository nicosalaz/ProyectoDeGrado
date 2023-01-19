import { PartialType } from '@nestjs/mapped-types';
import { CreateEspecieArboreaUbicacionDto } from './create-especie_arborea_ubicacion.dto';

export class UpdateEspecieArboreaUbicacionDto extends PartialType(CreateEspecieArboreaUbicacionDto) {}
