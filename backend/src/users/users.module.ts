
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './shared/user.service/user.service';
import { UserSchema } from './schemas/users.schema'

@Module({
    imports:[
        MongooseModule.forFeature([
                {name: 'User', schema: UserSchema}      
            ])
    ],
    controllers:[UsersController],
    providers:[UserService]
})
export class UsersModule {}
