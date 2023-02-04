import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';

ConfigModule.forRoot();

export const AppDataSource = new DataSource({
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
  synchronize: false, // never use TRUE in production!
  // migrationsRun: true
});
