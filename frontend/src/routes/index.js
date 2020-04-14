import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Delivery';
import DeliveryCreate from '../pages/Delivery/Create';
import DeliveryEdit from '../pages/Delivery/Edit';

import Deliveryman from '../pages/Deliveryman';
import DeliverymanCreate from '../pages/Deliveryman/Create';
import DeliverymanEdit from '../pages/Deliveryman/Edit';

import Recipient from '../pages/Recipient';
import RecipientCreate from '../pages/Recipient/Create';
import RecipientEdit from '../pages/Recipient/Edit';

import Problems from '../pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />

      <Route
        path="/delivery/create"
        exact
        component={DeliveryCreate}
        isPrivate
      />
      <Route path="/delivery/edit/:id" component={DeliveryEdit} isPrivate />

      <Route path="/deliveryman" exact component={Deliveryman} isPrivate />
      <Route
        path="/deliveryman/create"
        component={DeliverymanCreate}
        isPrivate
      />
      <Route
        path="/deliveryman/edit/:id"
        component={DeliverymanEdit}
        isPrivate
      />

      <Route path="/recipient" exact component={Recipient} isPrivate />
      <Route path="/recipient/create" component={RecipientCreate} isPrivate />
      <Route path="/recipient/edit/:id" component={RecipientEdit} isPrivate />

      <Route path="/problems" component={Problems} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
