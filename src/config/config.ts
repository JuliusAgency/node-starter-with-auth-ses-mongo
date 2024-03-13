import dotenv from 'dotenv';
// import { User } from '../users';
import { SessionConfig } from '@juliusagency/auth-ses-mongo-set';
import { LoggerOptions } from '@juliusagency/simple-logger';
import { ModelType } from '@juliusagency/authorization-ses-mongo-set';

dotenv.config();

export const configApp: Configuration = {
  test: process.env.TEST === 'true' ? true : false,
  app: {
    port: Number(process.env.PORT) || 3000,
  },
  session: {
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: process.env.SESSION_SAVE_UNINITIALIZED,
    cookie: {
      secure: process.env.COOKIE_SECURE,
      sameSite: process.env.COOKIE_SAME_SITE,
      httpOnly: process.env.COOKIE_HTTP_ONLY,
      maxAge: process.env.COOKIE_MAX_AGE,
    },
    resave: process.env.SESSION_RESAVE,
  },
  emailer: {
    name: 'gmail',
    user: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
  },
  logger: {
    loggerLevel: process.env.SIMPLE_LOGGER_LEVEL,
  },
  mongoDb: {
    url: process.env.MONGO_URI,
    dbName: process.env.MONGO_NAME,
  },
  authorization_type:
    process.env.AUTHORIZATION_MODEL_TYPE === 'RBAC'
      ? ModelType.RBAC
      : ModelType.ACL,
};

export interface Configuration {
  test: boolean;
  app: {
    port: number;
  };
  session: SessionConfig;
  emailer: {
    name: string;
    user: string;
    password: string;
  };
  logger: LoggerOptions;
  mongoDb: {
    url: string;
    dbName: string;
  };
  authorization_type: ModelType;
}
