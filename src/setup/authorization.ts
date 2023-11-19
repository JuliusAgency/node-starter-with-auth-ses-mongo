import { Connection } from 'mongoose';
import {
  ModelType,
  rulesRepository,
  // initRules,
} from '@juliusagency/authorization-repo-mongo';
import { setupAuthorization } from '@juliusagency/authorization-checker';
// import { aclData, rbacData } from './authorization-definitions';

export const setupAuthorizationSet = (connection: Connection) => {
  // Once only - populate the authorization definitions to DB
  // Init the rules repository
  // initRules(connection, ModelType.RBAC, rbacData);
  // initRules(connection, ModelType.ACL, aclData);

  // TODO: Will be the authorization-mongo-set
  const rulesRepo = rulesRepository(connection, ModelType.RBAC);
  // // Init the authorization package
  return setupAuthorization({ rulesRepo });
};
