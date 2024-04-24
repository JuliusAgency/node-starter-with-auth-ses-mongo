import { setupAuthorization as authorization } from '@juliusagency/authorization-ses-checker';
import {
  ModelType,
  initRules,
  rulesRepository,
} from '@juliusagency/authorization-repo-mongo';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const rulesEntity = (_config: any) => {
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthorization = async ({ config, db }) => {
  const modelType = config.modelType === 'ACL' ? ModelType.ACL : ModelType.RBAC;

  const rulesRepo = rulesRepository(db, modelType);

  // // Init the authorization package
  const isAuthorized = authorization({ rulesRepo });

  return {
    isAuthorized,
    initRules,
    ModelType,
  };
};
