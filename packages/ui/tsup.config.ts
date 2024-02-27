import { defineConfig } from "tsup";
import type { Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/**/*.tsx"],
  format: ["esm"],
  esbuildOptions(_options) {
    _options.banner = {
      js: '"use client"',
    };
  },
  dts: true,
  minify: true,
  external: ["react"],
  ...options,
}));
