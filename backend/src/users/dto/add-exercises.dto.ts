import {IsNumber, IsString, MinLength} from 'class-validator';

export class AddExercisesDto {
  @IsString({message: "Должно быть строкой"})
  readonly exerciseName: string;

  @IsNumber({}, {message: "Должно быть числом"})
  readonly userId: number;
}