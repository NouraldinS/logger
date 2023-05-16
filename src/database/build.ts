/* eslint-disable import/first */
require('dotenv').config();

import path from 'path';
import fs from 'fs';
import connection from './connection';

const sql = fs.readFileSync(path.join(process.cwd(), 'assets', 'buildScript.sql')).toString('utf-8');

connection.query(sql, (err) => {
  if (err) throw new Error('Error building database');
  // eslint-disable-next-line no-console
  console.log('Database have been built');
});
