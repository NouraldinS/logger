/* eslint-disable import/first */
require('dotenv').config();

import express from 'express';
import postLog from './controller/postLog';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.post('/log', postLog);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
