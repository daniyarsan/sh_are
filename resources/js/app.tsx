import React from 'react';

import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ParamsProvider } from '@/contexts/ParamsProvider';
import { ModalProvider } from '@/contexts/ModalProvider';

const appName = import.meta.env.VITE_APP_NAME || 'Sh_are';

function MainWrapper({ children }: { children: React.ReactNode }) {
  return <div className={`flex min-h-screen flex-col`}>{children}</div>;
}

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}.tsx`,
      import.meta.glob('./pages/**/*.tsx'),
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <MainWrapper>
        <ParamsProvider>
          <ModalProvider>
            <App {...props} />
          </ModalProvider>
        </ParamsProvider>
      </MainWrapper>,
    );
  },
  progress: {
    color: '#4B5563',
  },
});
