import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
//import './material-kit.min.css'
//import './mdb.dark.min.css'
import './bootstrap.min.css'
//import './now-ui-kit.min.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers"
import 'antd/dist/antd.css'


const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'))


reportWebVitals(console.table);
