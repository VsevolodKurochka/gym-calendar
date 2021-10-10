import {User} from './users.model';
import {InjectModel} from '@nestjs/sequelize';
import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {RolesService} from '../roles/roles.service';
import {ExercisesService} from '../exercises/exercises.service';
import {AddExercisesDto} from './dto/add-exercises.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService,
        private exercisesService: ExercisesService
    ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('user');
        await user.$set('roles', [role.id]);
        user.roles = [role];

        return user;
    }

    async addExercises(dto: AddExercisesDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }
        const exercise = await this.exercisesService.getByName(dto.exerciseName);
        await user.$set('exercises', [exercise])

        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({
            include: {all: true}
        });
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({
            where: {email},
            include: {all: true}
        })

        return user;
    }
}
