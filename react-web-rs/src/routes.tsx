import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import CreatePoint from '../src/pages/CreatePoint';

const Routes  = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/create-point" component={CreatePoint} />
        </BrowserRouter>
    );
}

export default Routes;