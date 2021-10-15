import { sass } from '@stencil/sass';
import { Config } from '@stencil/core';
import DocParser from './doc-parser';

const dsConfig: Config = {
  namespace: 'cds',
  globalStyle: 'src/core/core.scss',
  plugins: [
    sass({
      injectGlobalPaths: [
        'node_modules/bulma-scss/utilities/functions.scss',
        'src/core/functions.scss',
        'src/core/mixins.scss',
        'src/core/variables/initial-variables.scss',
        'src/core/variables/derived-variables.scss',
        'src/core/variables/collabur-variables.scss',
        'node_modules/bulma-scss/utilities/all.scss',
      ],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      copy: [
        {
          src: 'core/',
          dest: '../core',
        },
        {
          src: 'assets/',
          dest: '../assets',
        },
      ],
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
    { type: 'docs-readme', strict: true },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-custom',
      generator: DocParser('dist/metadata.json'),
    },
  ],
  testing: {
    allowableMismatchedPixels: 200,
    pixelmatchThreshold: 0.05,
    waitBeforeScreenshot: 20,
    testPathIgnorePatterns: ['dist', 'docs'],
    emulate: [
      {
        userAgent: 'iPhone',
        viewport: {
          width: 400,
          height: 800,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
      },
      {
        userAgent: 'Android',
        viewport: {
          width: 400,
          height: 800,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
      },
    ],
  },
};

if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  dsConfig.outputTargets = dsConfig.outputTargets.filter(
    (output) => output.type !== 'dist-hydrate-script'
  );
}

export const config = dsConfig;
