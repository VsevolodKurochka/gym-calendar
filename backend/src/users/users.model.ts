import {Model, Table, Column, DataType, BelongsToMany} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';
import {Role} from '../roles/roles.model';
import {UserRoles} from '../roles/user-roles.model';
import {Exercises} from '../exercises/exercises.model';
import {ExercisesUser} from '../exercises/exercises-user.model';

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: 1, description: 'Unique id field'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'test@gmail.com', description: 'Email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '123123', description: 'User password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Is banned user or not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'For hacking', description: 'Ban reason description'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @BelongsToMany(() => Exercises, () => ExercisesUser)
    exercises: Exercises[]
}