import { Request, Response, NextFunction } from 'express';
import { connect, getDb } from '../configs/mongoConnection';

async function mongoMiddleware(req: Request, res: Response, next: NextFunction) {
  const uri = 'mongodb+srv://mfaisalkn:3X6eci36u2IxZGoL@mfkn.asv91rp.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB URI
  const dbName = 'week-15-mfaisalkemal'; // Replace with your actual database name

  try {
    await connect(uri, dbName);
    const db = getDb(); // Get the database instance

    // Set the database instance on req for use in the next middleware
    req.db = db;

    next();
  } catch (error) {
    next(error);
  }
}

export default mongoMiddleware;
