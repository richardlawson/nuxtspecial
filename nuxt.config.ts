// https://nuxt.com/docs/api/configuration/nuxt-config
import axios from 'axios'

const getPostRoutes = async () => {
  const { data } = await axios.get('http://universities.hipolabs.com/search?country=United+Kingdom');
  // return the array of routes
  return data.map((university) => `/universities/${university.name}`);
};

export default defineNuxtConfig({
  ssr: true, // this should be set to true for static websites
  hooks: {
    async 'nitro:config'(nitroConfig) {
      // fetch the routes from our function above
      const slugs = await getPostRoutes();
      // add the routes to the nitro config
      nitroConfig.prerender.routes.push(...slugs);
    },
  },
  routeRules: {
    '/search': { ssr: false }
  }
})
