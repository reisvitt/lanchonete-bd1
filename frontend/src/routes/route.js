import React, { Suspense } from 'react';
import { Route as ReactRoute, Switch } from 'react-router-dom';
import { GuardedRoute } from 'react-router-guards';
import Loading from '../components/loading';

function Route({ data }) {
  return (
    <Switch>
      {data.map(({ layout: Layout, data: item }, index) => (
        <ReactRoute key={index} path={item.map((i) => i.path)}>
          <Layout>
            <Suspense fallback={<Loading />}>
              <Switch>
                {item.map(({ path, component, ...route }, idx) => (
                  <GuardedRoute
                    key={`${index}-${idx}`}
                    path={path}
                    component={component}
                    exact={route.exact || true}
                    {...route}
                  />
                ))}
              </Switch>
            </Suspense>
          </Layout>
        </ReactRoute>
      ))}
    </Switch>
  );
}

export default Route;
