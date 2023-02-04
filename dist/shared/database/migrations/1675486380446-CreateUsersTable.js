"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1675486380446 = void 0;
class CreateUsersTable1675486380446 {
    async up(queryRunner) {
        await queryRunner.query(`
            create table if not exists users(
                id uuid DEFAULT uuid_generate_v4() NOT NULL,
                first_name varchar,
                last_name varchar,
                email varchar unique,
                password varchar,
                otp varchar(6),
                is_verified boolean default false,
                last_login_at timestamp default null,
                created_at TIMESTAMP NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
                primary key(id)
            );`);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE users;
        `);
    }
}
exports.CreateUsersTable1675486380446 = CreateUsersTable1675486380446;
//# sourceMappingURL=1675486380446-CreateUsersTable.js.map