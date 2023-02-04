"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
class UserRepository extends typeorm_1.Repository {
    async findByEmail(email) {
        return this.findOneBy({ email });
    }
    async createNewUser(user) {
        const newUser = this.create(user);
        return this.save(newUser);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map