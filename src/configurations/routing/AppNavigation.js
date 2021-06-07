import React, { Suspense } from 'react';


const LoginContainer = React.lazy(() =>
  import(
    'components/Login/Login.Container' /* webpackChunkName: "Login.Container" */
  ),
);
const LoggedinContainer = React.lazy(() =>
  import(
    'components/Loggedin/Loggedin.Container' /* webpackChunkName: "Loggin.Container" */
  ),
);

const RegisterContainer = React.lazy(() =>
  import(
    'components/Register/Register.Container' /* webpackChunkName: "Register.Container" */
  ),
);

const appRoutes = {
  root: {
    defaultRoute: {
      path: '/loggedin',
      component: LoggedinContainer,
      needAuth: true,
      exact: true,
    },
  },
  authentication: {
    login: {
      path: '/login',
      component: LoginContainer,
      needAuth: false,
      exact: false,
    },
    register: {
      path: '/register',
      component: RegisterContainer,
      needAuth: false,
      exact: false,
    }
  },
};

const defaultAuthenticatedRoute = '/loggedin';
const defaultUnauthenticatedRoute = '/login';

const getAllRoutesArray = () =>
  Object.keys(appRoutes)
    .map(key =>
      Object.keys(appRoutes[key]).reduce((allRoutes, innerKey) => {
        allRoutes.push(appRoutes[key][innerKey]);
        return allRoutes;
      }, []),
    )
    .flat();
export {
  appRoutes,
  defaultAuthenticatedRoute,
  defaultUnauthenticatedRoute,
  getAllRoutesArray,
};
