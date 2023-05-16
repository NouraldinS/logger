import { PoolConfig, Pool } from 'pg';
import url from 'url';

if (!process.env.DB_URL) throw new Error('Enviroment variable DB_URL must be set');

const params = url.parse(process.env.DB_URL);
const [username, password] = params.auth.split(':');

const options: PoolConfig = {
  host: params.hostname,
  port: parseInt(params.port, 10),
  database: params.pathname.split('/')[1],
  max: parseInt(process.env.DB_MAX_CONNECTIONS, 10) || 2,
  user: username,
  password,
};

options.ssl = options.host !== 'localhost';

export default new Pool(options);
