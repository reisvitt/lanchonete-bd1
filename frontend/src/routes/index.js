import React, { lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { GuardProvider } from 'react-router-guards';
import BaseLayout from '../components/layouts/base';
import LoggedLayout from '../components/layouts/logged';
import { guardsRoutes } from './utils/functions';
import Route from './route'


const HomeContas = lazy(() => import('../pages/home/contas'));
const HomeGarcom = lazy(() => import('../pages/home/garçom'));
const HomeGerente = lazy(() => import('../pages/home/gerente'));
const HomeCozinha = lazy(() => import('../pages/home/cozinha'));
const Funcionario = lazy(() => import('../pages/funcionario'));
const Proflle = lazy(() => import('../pages/proflle'));
const Login = lazy(() => import('../pages/auth/login'));
const Ala = lazy(() => import('../pages/ala'));
const Table = lazy(() => import('../pages/table'));

// Page Errors
const NoAuthorization = lazy(() => import('../pages/errors/no_authorization'));
const PageNotFound = lazy(() => import('../pages/errors/page_not_found'));
const ServerErrors = lazy(() => import('../pages/errors/server_errors'));

const Routes = () => {
  const routes = [
    {
      layout: BaseLayout,
      data: [
        { path: '/login', component: Login },
      ],
    },
    {
      layout: LoggedLayout,
      data: [
        { path: '/', component: <div />, meta: { auth: true } },
        { path: '/gerente', component: HomeGerente, meta: { auth: true } },
        { path: '/cozinha', component: HomeCozinha, meta: { auth: true } },
        { path: '/gerente/funcionarios', component: Funcionario, meta: { auth: true } },
        { path: '/garcom', component: HomeGarcom, meta: { auth: true } },
        { path: '/contas', component: HomeContas, meta: { auth: true } },
        { path: '/perfil', component: Proflle, meta: { auth: true } },
        { path: '/logout', component: Proflle},
        { path: '/ala/:id', component: Ala, meta: { auth: true } },
        { path: '/mesa/:id', component: Table, meta: { auth: true } },
        { path: '/403', component: NoAuthorization },
        { path: '/404', component: PageNotFound },
        { path: '/5:number', component: ServerErrors },
      ],
    },
    {
      layout: BaseLayout,
      data: [
        { path: '*', component: PageNotFound },
      ],
    },
  ];

  return (
    <BrowserRouter>
      <GuardProvider guards={[guardsRoutes]} error={PageNotFound}>
        <Switch>
          <Route data={routes} />
        </Switch>
      </GuardProvider>
    </BrowserRouter>
  )
}

export default Routes