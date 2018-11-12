import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers/index';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
<CookiesProvider>
  <Provider store={store} >
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
</CookiesProvider>, document.getElementById('root')
)
