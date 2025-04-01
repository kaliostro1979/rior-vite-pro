import React, { Suspense } from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { Loader } from '@/Components/ui';

import { APP_ROUTES } from './constants';

export const Routes = () => {
  return (
    <RouterRoutes>
      {APP_ROUTES?.map(({ path, layout: Layout, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={
            Layout ? (
              <Layout>
                <Suspense fallback={<Loader size="large" fullPage />}>
                  <Component />
                </Suspense>
              </Layout>
            ) : (
              <Suspense fallback={<Loader size="large" fullPage />}>
                <Component />
              </Suspense>
            )
          }
        />
      ))}
    </RouterRoutes>
  );
};
