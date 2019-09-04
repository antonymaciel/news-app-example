import React from 'react';
import { createStore , applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import rootReducer from './reducers'
import Home from './containers/home'

let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
