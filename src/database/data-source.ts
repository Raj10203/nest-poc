import { join } from 'node:path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from '../users/user.entity.js';

// Shared by the Nest app (TypeOrmModule) and the TypeORM CLI (migrations).
// Defaults match docker-compose.yml when running on the host; the app container overrides them via env.
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 3308),
  username: process.env.DB_USER ?? 'user',
  password: process.env.DB_PASSWORD ?? 'password',
  database: process.env.DB_NAME ?? 'nest_poc',
  entities: [User],
  migrations: [join(import.meta.dirname, 'migrations', '*.js')],
  synchronize: false, // schema changes only through migrations
};

export default new DataSource(dataSourceOptions);
