import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  console.log('Starting up.....');
  
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('auth-Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
  app.listen(3000, () => {
    console.log('auth-Listening on port 3000!!!');
  });
};

start();