import environment from './base';

const baseApi = 'http://10.0.2.2:8080';
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
