import React from 'react';
import { Preview } from '@storybook/react';

import { FieldGroup, MarigoldProvider } from '@marigold/components';

import 'tailwindcss/tailwind.css';

import '@marigold/theme-core/index.css';
import core from '@marigold/theme-core';

import '@marigold/theme-b2b/index.css';
import b2b from '@marigold/theme-b2b';

import { withThemeByDataAttribute } from '@storybook/addon-styling';
// Helpers
// ---------------
const THEME = {
  core: core,
  b2b: b2b,
};

type ThemeNames = keyof typeof THEME;

// Parameters
// ---------------

export const parameters: Preview['parameters'] = {
  layout: 'fullscreen',
  a11y: {
    element: '#root',
  },
  controls: { expanded: true },
};

// fix type any
export const decorators: any = [
  withThemeByDataAttribute({
    themes: {
      core: core.name,
      b2b: b2b.name,
      stacked: 'stacked',
    },
    defaultTheme: core.name,
    attributeName: 'data-theme',
  }),

  (Story: any, { globals, parameters }: any) => {
    const theme = globals.theme || parameters.theme || 'core';

    switch (theme) {
      case 'stacked': {
        return (
          <>
            {Object.keys(THEME).map(key => (
              <MarigoldProvider theme={THEME[key as ThemeNames]}>
                <Frame key={key} id={key} title={`Theme "${key}"`}>
                  <MarigoldProvider theme={THEME[key as ThemeNames]}>
                    <div className="p-4">{Story()}</div>
                  </MarigoldProvider>
                </Frame>
              </MarigoldProvider>
            ))}
          </>
        );
      }
      default: {
        return (
          <MarigoldProvider theme={THEME[theme as ThemeNames]}>
            <div className="h-screen p-6">
              <FieldGroup labelWidth="200px">{Story()}</FieldGroup>
            </div>
          </MarigoldProvider>
        );
      }
    }
  },
];

const Frame = ({ children, title }: any) => (
  <div className="p-4">
    <div className="mb-0.5 inline-block rounded-lg border border-solid border-orange-200 bg-orange-200 p-0.5 font-sans text-xs text-orange-900">
      {title}
    </div>
    <div className="rounded-lg border border-solid border-[#dee2e6] shadow-sm">
      {children}
    </div>
  </div>
);