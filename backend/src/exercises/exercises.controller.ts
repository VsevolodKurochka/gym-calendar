import {Body, Controller, Delete, Get, Post} from '@nestjs/common';
import {ExercisesService} from './exercises.service';
import {ApiOperation, ApiResponse} from '@nestjs/swagger';
import {Exercises} from './exercises.model';
import {CreateExercisesDto} from './dto/create-exercises.dto';

@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {
  }

  @ApiOperation({summary: 'Create Exercise'})
  @ApiResponse({status: 200, type: Exercises})
  @Post()
  create(@Body() exerciseDto: CreateExercisesDto) {
    return this.exercisesService.create(exerciseDto);
  }

  @ApiOperation({summary: 'Get exercises list'})
  @ApiResponse({status: 200, type: Exercises})
  @Get()
  getAll() {
    return this.exercisesService.getAll();
  }

  @ApiOperation({summary: 'Remove exercise'})
  @ApiResponse({status: 200, type: Exercises})
  @Delete()
  remove(@Body() id: number) {
    return this.exercisesService.remove(id);
  }
}
