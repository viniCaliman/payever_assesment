import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://db_admin:16idcuelvkGba3NI@cluster0.flhmlqu.mongodb.net/'),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
