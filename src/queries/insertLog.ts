import { DatabaseQuery } from '../types';
import connection from '../database/connection';

interface Log {
  timestamp: number;
  openTime: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  closeTime: number;
}

const insertLog: DatabaseQuery<Log> = (log, cb) => {
  connection.query(
    'INSERT INTO logs (timestamp, openTime, open, high, low, close, volume, closeTime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
    [
      log.timestamp,
      log.openTime,
      log.open,
      log.high,
      log.low,
      log.close,
      log.volume,
      log.closeTime,
    ],
    (err, res) => {
      if (err) {
        return cb(err);
      }
      return cb(null, res);
    },
  );
};

export default insertLog;
