import { Document } from "mongoose";

export class User extends Document{
    first_name: string;
    last_name: string;
    email: string;
}
