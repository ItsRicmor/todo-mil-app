/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */
export default function baseEnv(baseApi) {
  return {
    route: {
      baseRoute: '',
    },
    api: {
      orders: `${baseApi}/api/orders/:orderId`,
      categories: `${baseApi}/api/categories/:categoryId`,
      menus: `${baseApi}/api/menus/:menuId`,
      articles: `${baseApi}/api/articles/:id`,
    },
    auth: {
      login: `${baseApi}/auth/login?password=:password&username=:username`,
      register: `${baseApi}/auth/register`,
      forgot: `${baseApi}/auth/forgot?email=:email`,
    },
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}
