import { Module } from '@nestjs/common';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import {SequelizeModule} from '@nestjs/sequelize';
import {Exercises} from './exercises.model';
import {ExercisesUser} from './exercises-user.model';
import {User} from '../users/users.model';

@Module({
  controllers: [ExercisesController],
  providers: [ExercisesService],
  exports: [
      ExercisesService
  ],
  imports: [
      SequelizeModule.forFeature([User, Exercises, ExercisesUser])
  ]
})
export class ExercisesModule {}

