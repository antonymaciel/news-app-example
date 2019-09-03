import React from 'react';
import { createStore , applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import rootReducer from './reducers'
import Home from './components/Home'

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
