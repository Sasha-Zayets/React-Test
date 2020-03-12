import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import News from './views/News/News';

const Router = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" component={News} />
    </Switch>
);

export default Router;