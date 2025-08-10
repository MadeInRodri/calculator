import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.js",
      manifest: {
        name: "calculator offline",
        short_name: "calculator",
        description: "Calculadora offline",
        theme_color: "#3B4664",
        background_color: "#3B4664",
        display: "standalone",
        start_url: ".",
        icons: [
          {
            src: "icons/calculator-logo-2",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/calculator-logo",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) =>
              ["document", "script", "style", "image", "font"].includes(
                request.destination
              ),
            handler: "CacheFirst",
            options: {
              cacheName: "app-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
    }),
  ],
});
