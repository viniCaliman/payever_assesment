import { Injectable } from '@nestjs/common';
import { User } from '../user/user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>){

    }

    getAll(){
        return "teste";
    }


    getById(id: number){
        return "testeId";
    }

    getAvatarById(id: number){
        return "testeAvatar1";
    }

    async create(user: User){
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    deleteAvatar(id: number){
        return "testeDelete";
    }
}
