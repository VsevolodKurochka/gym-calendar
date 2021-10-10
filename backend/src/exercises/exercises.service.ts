import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Exercises} from './exercises.model';
import {CreateExercisesDto} from './dto/create-exercises.dto';

@Injectable()
export class ExercisesService {
  constructor(@InjectModel(Exercises) private exercisesRepository: typeof Exercises) {
  }

  async create(dto: CreateExercisesDto) {
    const exercise = await this.exercisesRepository.create(dto);
    return exercise
  }

  async getAll() {
    const exercises = await this.exercisesRepository.findAll({
      include: {all: true}
    });

    return exercises
  }

  async remove(id: number) {
    const exercise = await this.exercisesRepository.destroy({
      where: {
        id
      }
    })
    return exercise
  }

  async getByName(name: string) {
    return await this.exercisesRepository.findOne({
      where: {name}
    });
  }
}
