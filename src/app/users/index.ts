/**
 * The extended User
 */
import { setupUserController } from './controller';
import { setupUserRouter } from './router';

export { User } from './model';

export const setupUsers = ({ isAuthorized }) => {
  const controller = setupUserController();
  return setupUserRouter({ isAuthorized, controller });
};
