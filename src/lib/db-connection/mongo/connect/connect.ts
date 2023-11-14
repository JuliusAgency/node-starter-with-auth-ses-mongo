import mongoose from 'mongoose';
import { configApp } from '../../../../config/config';

export const connectMongo = async () => {
  try {
    await mongoose.connect(configApp.mongoDb.url, {
      dbName: configApp.mongoDb.dbName,
    });
    console.log('Connected to Mongo');
  } catch (error) {
    console.log('Can"t connect to Mongo');
    process.exit(1);
  }
};
