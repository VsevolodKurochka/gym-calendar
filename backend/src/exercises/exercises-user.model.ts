import {Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {User} from '../users/users.model';
import {Exercises} from './exercises.model';

@Table({tableName: 'exercises_user', createdAt: false, updatedAt: false})
export class ExercisesUser extends Model<ExercisesUser> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Exercises)
  @Column({type: DataType.INTEGER})
  exercisesId: number;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;
}