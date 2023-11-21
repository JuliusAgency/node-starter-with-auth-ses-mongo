import { Connection } from 'mongoose';

import { initRules, ModelType } from '@juliusagency/authorization-mongo-set';

import { aclData } from './acl';
import { rbacData } from './rbac';

export { ModelType };
export const populateRules = (connection: Connection, type: ModelType) => {
  const rules = type === ModelType.ACL ? aclData : rbacData;
  initRules(connection, type, rules);
};
