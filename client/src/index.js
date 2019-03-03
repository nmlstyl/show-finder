import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import rootReducer from './reducers/index'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import { CookiesProvider } from 'react-cookie'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(rootReducer,
              compose(applyMiddleware(thunk),
                      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) )

ReactDOM.render(
<CookiesProvider>
  <Provider store={store} >
    <Router>
      <Route path='/' component={props => <App {...props} />}/>
    </Router>
  </Provider>
</CookiesProvider>, document.getElementById('root')
)
