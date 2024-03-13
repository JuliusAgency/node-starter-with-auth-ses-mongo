import express, { Express, Router } from 'express';

import { configApp } from './config/config';
import { connect } from './lib/db-connection';

// Setup packages and common features
import {
  setupAuthentication,
  setupAuthorization,
  setupCors,
  setupErrorHandler,
  setupLogger,
} from './setup';

// Setup the application domains
import { setupExamples, setupUsers } from './app';

const app: Express = express();

app.use(express.json());
setupCors(app);

connect().then((connection) => {
  const { logger, httpLogger } = setupLogger();
  app.use(httpLogger);

  // setup base packages
  const { authMiddleware, authRouter } = setupAuthentication(app);

  // Auth middleware usage
  // Define the protected routes
  const protectedRoutes = ['/examples', '/users'];
  app.use(protectedRoutes, authMiddleware);

  const isAuthorized = setupAuthorization(connection);

  // Routers Setup
  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);
  router.use('/users', setupUsers({ isAuthorized }));
  router.use('/examples', setupExamples({ isAuthorized }));
  app.use(router);
  setupErrorHandler(app);

  // Start the server
  const port = configApp.app.port;
  app.listen(port, () => {
    logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});
