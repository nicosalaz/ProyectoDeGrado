import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspecieArboreaUbicacionService } from './especie_arborea_ubicacion.service';
import { CreateEspecieArboreaUbicacionDto } from './dto/create-especie_arborea_ubicacion.dto';
import { UpdateEspecieArboreaUbicacionDto } from './dto/update-especie_arborea_ubicacion.dto';

@Controller()
export class EspecieArboreaUbicacionController {
  constructor(private readonly especieArboreaUbicacionService: EspecieArboreaUbicacionService) {}

 
}
