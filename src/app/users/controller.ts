import { Request, Response } from 'express';
// import { AppError, ResponseCode } from '@juliusagency/simple-error-handler';

import { User } from './model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupUserController = () => {
  const getAllUsers = async (_req: Request, res: Response) => {
    const users = await User.find({});
    if (!users) {
      throw new Error('There are no users');
    }
    return res.status(200).json(users);
  };
  const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const user = await getUserData(userId);
    if (!user) {
      throw new Error("The user doesn't exists");
    }
    return res.status(200).json(user);
  };
  const getUserData = async (userId: string) => {
    return await User.findById(userId);
  };

  return {
    getAllUsers,
    getUserById,
  };
};
