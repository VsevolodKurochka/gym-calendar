import {ApiProperty} from '@nestjs/swagger';

export class CreateExercisesDto {
  @ApiProperty({example: 'Test', description: 'Name'})
  name: string;

  @ApiProperty({example: true, description: 'Is doubled weight'})
  isDoubledWeight: boolean;

  @ApiProperty({example: false, description: 'Is own weight'})
  isOwnWeight: boolean;
}