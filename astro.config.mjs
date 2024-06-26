import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'

const env = loadEnv(process.env.NODE_ENV, process.cwd(), '')
const output = env.PUBLIC_ENV === 'preview' ? 'server' : 'static'
const storyblokBridge = env.PUBLIC_ENV !== 'production'

// https://astro.build/config
export default defineConfig({
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      // Using the Storyblok Bridge
      // https://github.com/storyblok/storyblok-astro?tab=readme-ov-file#using-the-storyblok-bridge
      bridge: storyblokBridge
        ? {
            preventClicks: true,
          }
        : undefined,
      apiOptions: {
        region: 'eu',
      },
      components: {
        Page: 'components/pages/Page',
        LoomVideoPage: 'components/pages/LoomVideoPage',
        DeskHomePage: 'components/pages/DeskHomePage',
      },
      componentsDir: 'src',
      enableFallbackComponent: true,
      useCustomApi: false,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    alpinejs(),
  ],
})
