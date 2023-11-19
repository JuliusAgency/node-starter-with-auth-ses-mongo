import { connectMongo } from './mongo';

export const connect = async () => {
  return await connectMongo();
};
