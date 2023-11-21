import dotenv from 'dotenv';
// import { User } from '../users';
import { SessionConfig } from '@juliusagency/auth-ses-mongo-set';

dotenv.config();

export const configApp: Configuration = {
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
  mongoDb: {
    url: process.env.MONGO_URI,
    dbName: process.env.MONGO_NAME,
  },
  emailer: {
    name: 'gmail',
    user: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
  },
};

export interface Configuration {
  app: {
    port: number;
  };
  session: SessionConfig;
  mongoDb: {
    url: string;
    dbName: string;
  };
  emailer: {
    name: string;
    user: string;
    password: string;
  };
}
