import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';
import {User} from '../users/users.model';
import {ExercisesUser} from './exercises-user.model';

interface ExercisesCreationAttrs {
  name: string;
  isDoubledWeight: boolean;
  isOwnWeight: boolean;
}

@Table({tableName: 'exercises'})
export class Exercises extends Model<Exercises, ExercisesCreationAttrs>{
  @ApiProperty({example: 1, description: 'Unique id field'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'test@gmail.com', description: 'Name'})
  @Column({type: DataType.STRING, unique: false, allowNull: false})
  name: string;

  @ApiProperty({example: true, description: 'Is doubled weight'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  isDoubledWeight: boolean;

  @ApiProperty({example: false, description: 'Is own weight'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  isOwnWeight: boolean;

  @BelongsToMany(() => User, () => ExercisesUser)
  users: User[];
}