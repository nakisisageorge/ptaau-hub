// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// `BUILD_CPANEL=1`: static prerender + disable Cloudflare adapter so the SSR bundle is
// named `server.js` (required by TanStack's prerender preview). Default `npm run build`
// unchanged for Cloudflare Workers.
const cpanel = process.env.BUILD_CPANEL === "1";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  ...(cpanel ? { cloudflare: false as const } : {}),
  tanstackStart: {
    server: { entry: "server" },
    ...(cpanel
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
            filter: ({ path }) =>
              !/\.(pdf|zip|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|eot)$/i.test(path),
          },
        }
      : {}),
  },
});
