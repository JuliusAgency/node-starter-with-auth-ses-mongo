import {
  initRules,
  ModelType,
  setupAuthorizationSet,
} from '@juliusagency/authorization-ses-mongo-set';
import { Connection } from 'mongoose';

import { configApp } from '../../config';

import { aclData } from '../authorization-definitions/acl';
import { rbacData } from '../authorization-definitions/rbac';

export const setupAuthorization = (connection: Connection) => {
  const modelType = configApp.authorization_type;
  if (configApp.test) {
    const rules = modelType === ModelType.ACL ? aclData : rbacData;
    initRules(connection, modelType, rules);
  }
  return setupAuthorizationSet(connection, modelType);
};
