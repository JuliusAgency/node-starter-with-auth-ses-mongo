import { ExternalConfig, createConfig } from '../create';

export const createDevConfig = (externalConfig?: ExternalConfig) => {
  return createConfig(
    {
      env: 'dev',

      // server
      port: '3014',
      baseUrl: 'http://127.0.0.1',

      // options
      mocksEnabled: true,
    },
    externalConfig,
  );
};
