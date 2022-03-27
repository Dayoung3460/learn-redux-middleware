import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./modules";
import loggerMiddleware from "./lib/loggerMiddleware";
import {createLogger} from "redux-logger/src";

const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(logger))
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware))

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);