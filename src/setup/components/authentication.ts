import {
  AuthConfig,
  AuthSesSetSetupOptions,
  // BaseUser,
  authSetSetup,
} from '@juliusagency/auth-ses-mongo-set';

import { Express } from 'express';

import { configApp } from '../../config';
import { User } from '../../app/users';
import { setupEmailer } from '.';

export const setupAuthentication = (app: Express) => {
  const emailer = setupEmailer();
  // Setup Auth with session and MongoDb
  const authConfig: AuthConfig = {
    app: app,
    User: User,
    sessionConfig: configApp.session,
  };

  const authSetupOptions: AuthSesSetSetupOptions = {
    authConfig: authConfig,
    emailer: emailer,
  };

  return authSetSetup(authSetupOptions);
};
