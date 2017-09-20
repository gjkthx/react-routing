import React from 'react';
// import Switch from 'react-router-dom';
// import Route from 'react-router-dom';
import { Switch, Route } from "react-router-dom";


import Store from './components/Store/Store';
import Details from './components/Details/Details';
import Checkout from './components/Checkout/Checkout';


export default (
<Switch>
    <Route component = {Store} path='/' exact />
    <Route component = { Details } path='/details/:id' />
    <Route component = { Checkout } path='/checkout'/>
</Switch>
)