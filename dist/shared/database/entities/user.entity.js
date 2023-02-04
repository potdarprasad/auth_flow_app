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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar', name: 'first_name', nullable: false
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar', name: 'last_name', nullable: false
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar', name: 'email', nullable: false, unique: true
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({
        type: 'varchar', name: 'password', nullable: false
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar', name: 'otp', nullable: false
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "otp", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean', name: 'is_verified', nullable: true
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isVerified", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_login_at', type: 'timestamp', nullable: true, default: null }),
    __metadata("design:type", Date)
], UserEntity.prototype, "lastLoginAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', name: 'created_at' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', name: 'updated_at' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "updatedAt", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('users')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map