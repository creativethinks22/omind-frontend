import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Home,
  Proyects,
  Contact,
  Users,
  Login,
  Dashboard,
  Settings,
  Products,
  NotFound,
  CookiePolicy,
} from '@components/pages';

import { ProtectedRoute, Role } from '@utils/Auth';

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/our-work/:slug" component={Proyects.Info} />
      <Route path="/our-work" component={Proyects.Index} />
      <Route path="/products/:slug" component={Products.Info} />
      <Route path="/products" component={Products.Index} />
      <Route path="/contact" component={Contact} />
      <Route path="/cookies-policy" component={CookiePolicy} />
      <Route path="/login" component={Login} />

      <ProtectedRoute
        path="/dashboard"
        allowedRoles={[Role.Admin, Role.User]}
        component={Dashboard}
      />

      <ProtectedRoute
        path="/settings"
        allowedRoles={[Role.Admin, Role.User]}
        component={Settings.Profile}
      />

      <ProtectedRoute path="/users/edit/:id" allowedRoles={[Role.Admin]} component={Users.Edit} />
      <ProtectedRoute path="/users/add" allowedRoles={[Role.Admin]} component={Users.Add} />
      <ProtectedRoute path="/users" allowedRoles={[Role.Admin]} component={Users.Todo} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default AppRoute;
