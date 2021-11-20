import environment from './base';

const baseApi = 'http://192.168.8.104:8080';
const env = environment(baseApi);

const developmentEnv = {
  ...env,
  // override anything that gets added from base.
  api: {
    ...env.api,
  },
  isProduction: false,
  isDevelopment: true,
};

export default developmentEnv;
