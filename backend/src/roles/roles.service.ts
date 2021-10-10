import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateRoleDto} from './dto/create-role.dto';
import {InjectModel} from '@nestjs/sequelize';
import {Role} from './roles.model';

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {
    }
    async createRole(dto: CreateRoleDto) {
        const role = await this.roleRepository.findOne({
            where: {value: dto.value}
        });
        if (role) {
            throw new HttpException('Role already exists', HttpStatus.BAD_REQUEST)
        }
        return await this.roleRepository.create(dto);
    }

    async getRoles() {
        return await this.roleRepository.findAll({
            include: {all: true}
        })
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({
            where: {value}
        });
        if (!role) {
            throw new HttpException('Role does not found', HttpStatus.NOT_FOUND);
        }

        return role;
    }
}
