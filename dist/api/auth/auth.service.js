"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../shared/database/entities");
const typeorm_2 = require("typeorm");
const OtpGenerator = require("otp-generator");
let AuthService = class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async signUp(newUser) {
        const user = await this.userRepository.findOneBy({ email: newUser.email });
        if (user) {
            throw new common_1.HttpException('User With This Email Already Exists', common_1.HttpStatus.CONFLICT);
        }
        const otp = this.generateNumericOtp();
        newUser = this.userRepository.create(Object.assign({ otp }, newUser));
        await this.userRepository.save(newUser);
        return 'User Created Successfully';
    }
    async verifyUser(data) {
        const user = await this.userRepository.findOneBy({ email: data.email });
        if (!user) {
            throw new common_1.HttpException('Invalid User Email', common_1.HttpStatus.BAD_REQUEST);
        }
        if (data.otp === user.otp) {
            await this.userRepository.update({ email: data.email }, { isVerified: true, otp: null });
            return 'User Account Verified Successfully';
        }
        else {
            throw new common_1.HttpException('Invalid Otp', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async resendOtp(data) {
        const user = await this.userRepository.findOneBy({ email: data.email });
        if (!user) {
            throw new common_1.HttpException('Invalid User Email', common_1.HttpStatus.BAD_REQUEST);
        }
        const otp = this.generateNumericOtp();
        await this.userRepository.update({ email: data.email }, { otp, isVerified: false });
    }
    generateNumericOtp() {
        return OtpGenerator.generate(6, { specialChars: false, upperCaseAlphabets: false, lowerCaseAlphabets: false, digits: true });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map