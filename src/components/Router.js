import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage/index';
import ScrollToTop from './ScrollToTop';

const Router = () => (
    <>
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    </>
);

export default Router;