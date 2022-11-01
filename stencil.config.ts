import { Config } from '@stencil/core';
import dotenvPlugin from 'rollup-plugin-dotenv';

// https://stenciljs.com/docs/config

export const config: Config = {
  buildEs5: true,
  extras: {
    appendChildSlotFix: false,
    cloneNodeFix: false,
    cssVarsShim: true,
    dynamicImportShim: true,
    safari10: true,
    scriptDataOpts: true,
    shadowDomShim: true,
    slotChildNodesFix: true,
  },
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  namespace: 'apply-with-replacement',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [dotenvPlugin()],
  taskQueue: 'async',
};
