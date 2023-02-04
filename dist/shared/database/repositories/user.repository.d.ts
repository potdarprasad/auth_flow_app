import { Repository } from "typeorm";
import { UserEntity } from "../entities";
import { SignUpDto } from "../../dto";
export declare class UserRepository extends Repository<UserEntity> {
    findByEmail(email: string): Promise<UserEntity>;
    createNewUser(user: SignUpDto): Promise<UserEntity>;
}
