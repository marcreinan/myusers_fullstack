import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Users from './pages/Users';

export default function Routes(){
    return (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Logon}></Route>
              <Route path="/users" exact component={Users}></Route>
          </Switch>
        </BrowserRouter>
    );
}