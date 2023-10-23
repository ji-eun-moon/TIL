import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import * as NextImage from 'next/image';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

NextImage.default.defaultProps = {
  unoptimized: true,
};

export default preview;
