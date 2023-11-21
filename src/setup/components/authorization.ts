import {
  // initRules,
  ModelType,
  setupAuthorizationSet,
} from '@juliusagency/authorization-mongo-set';
import { Connection } from 'mongoose';

export { ModelType };

export const setupAuthorization = (connection: Connection, type: ModelType) => {
  return setupAuthorizationSet(connection, type);
};
