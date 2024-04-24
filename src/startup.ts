import { getConfigMapping } from './initialization';
import { appConfig } from './configuration';
import { initDb } from './db';
import { initCore } from './core';
import { ServerOptions, startupServer } from './server';

import { User, setupAppDomain, protectedRoutes, loadData } from './app-domain';

export const startup = async () => {
  const configMapping = getConfigMapping();

  // extend config by extensions configurations
  const config = appConfig(configMapping);

  const db = await initDb(config);

  const serverOptions: ServerOptions = {
    config: config,
    db: db,
    core: initCore,
    user: User,
    protectedRoutes: protectedRoutes,
    appDomain: setupAppDomain,
    loadData: loadData,
  };

  startupServer(serverOptions);
};
