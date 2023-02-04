"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
config_1.ConfigModule.forRoot();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    entities: ['dist/**/*.entity.{ts,js}'],
    migrations: ['dist/**/migrations/*.{ts,js}'],
    migrationsTableName: 'typeorm_migrations',
    logger: 'file',
    synchronize: false,
});
//# sourceMappingURL=database.config.js.map