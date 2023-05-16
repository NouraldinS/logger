import { Request, Response } from 'express';
import insertLog from '../queries/insertLog';

const postLog = async (req: Request, res: Response): Promise<void> => {
  insertLog(req.body, (err) => {
    if (err) return res.send('Entry NOT added');
    return res.send('Entry added');
  });
};

export default postLog;
