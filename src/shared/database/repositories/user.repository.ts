import { Repository } from "typeorm";
import { UserEntity } from "../entities";
import { SignUpDto } from "../../dto";

export class UserRepository extends Repository<UserEntity>{
    //Find by Email
    async findByEmail(email: string): Promise<UserEntity>{
        return this.findOneBy({email});
    }

    //Create New User
    async createNewUser(user: SignUpDto): Promise<UserEntity>{
        const newUser = this.create(user);
        return this.save(newUser);
    }

    // async updateUserVerifiedStatus(email: string, ){

    // }
}