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

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer,
                          compose(applyMiddleware(thunk))
                          )

ReactDOM.render(
<CookiesProvider>
  <Provider store={store} >
    <Router>
      <Route path='/' component={props => <App {...props} />}/>
    </Router>
  </Provider>
</CookiesProvider>, document.getElementById('root')
)
