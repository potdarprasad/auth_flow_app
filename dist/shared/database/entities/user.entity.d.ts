import { BaseEntity } from "typeorm";
export declare class UserEntity extends BaseEntity {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    otp: string;
    isVerified: boolean;
    lastLoginAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
