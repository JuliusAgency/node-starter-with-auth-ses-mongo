import express, { Express, Router } from 'express';

import { configApp } from './config/config';
import { connect } from './lib/db-connection';

import {
  setupAuthentication,
  setupAuthorization,
  setupCors,
  ModelType,
  // populateRules,
} from './setup';

import { setupUserRouter } from './app/users';
import { setupExamplesRouter } from './app/examples';

const app: Express = express();

app.use(express.json());
setupCors(app);

connect().then((connection) => {
  // setup base packages
  const { authMiddleware, authRouter } = setupAuthentication(app);

  // Auth middleware usage
  // Define the protected routes
  const protectedRoutes = ['/examples', '/users'];
  app.use(protectedRoutes, authMiddleware);

  // Once only - populate the authorization definitions to DB
  // Init the rules repository
  // populateRules(connection, ModelType.RBAC);

  const isAuthorized = setupAuthorization(connection, ModelType.RBAC);

  // Routers Setup
  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);
  router.use('/users', setupUserRouter({ isAuthorized }));
  router.use('/examples', setupExamplesRouter({ isAuthorized }));
  app.use(router);

  // Start the server
  const port = configApp.app.port;
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});
