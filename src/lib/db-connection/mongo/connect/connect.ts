import mongoose from 'mongoose';
import { configApp } from '../../../../config/config';

export const connectMongo = async () => {
  // The `EventListeners` is setup here.
  mongoose.connection
    .on('error', (err) => {
      console.error(err);
    })
    .on('connected', () => {
      console.log('connected to mongodb');
    });

  // The actual connection to the database happens here.
  await mongoose.connect(configApp.mongoDb.url, {
    dbName: configApp.mongoDb.dbName,
  });
  return mongoose.connection;
};
