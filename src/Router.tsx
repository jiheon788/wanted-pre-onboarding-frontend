import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routerMeta from '@/lib/routerMeta';
import Loading from '@/components/Loading';

const lazyImport = (pageName: string) => lazy(() => import(`@/pages/${pageName}`));

const assignRouter = Object.keys(routerMeta).map((componentKey: string) => {
  const props: any = routerMeta[componentKey];

  return {
    Component: lazyImport(componentKey),
    props,
  };
});

const Router = () => (
  <Routes>
    {assignRouter.map(({ Component, props }) => (
      <Route
        key={props.path}
        path={props.path}
        element={
          <Suspense fallback={<Loading />}>
            <Component />
          </Suspense>
        }
        {...props}
      />
    ))}
  </Routes>
);

export default Router;
