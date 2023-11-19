import { Router } from 'express';

import { setupUserController } from './controller';

export const setupUserRouter = ({ isAuthorized }) => {
  const cnt = setupUserController();
  const router = Router();
  router.get(
    '/',
    // isAuthorized('read', 'users'),
    isAuthorized('read'),
    cnt.getAllUsers,
  );
  router.get(
    '/:userId',
    // isAuthorized('read', 'users/:userId'),
    isAuthorized('read'),
    cnt.getUserById,
  );
  return router;
};
