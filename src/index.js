import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './compnents/Welcome';
import SignUp from './compnents/auth/SignUp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { applyMiddleware } from 'redux';
import Featute from './compnents/Featute';
import Signout from './compnents/Signout';
import Signin from './compnents/auth/Signin';
const store=createStore (reducers,{},applyMiddleware(reduxThunk))

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/feature" exact component={Featute} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signout" exact component={Signout} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals