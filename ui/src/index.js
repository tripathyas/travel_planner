// console.log('hi');

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getUsers } from './actions/userAction';
import { getTrips } from './actions/tripAction';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(getUsers());
store.dispatch(getTrips());
// store.dispatch(loadCourses());
// store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider >,
    document.getElementById('app')
);
