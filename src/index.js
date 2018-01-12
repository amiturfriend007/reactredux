import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';//Provider helps inject store into the app
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';
const store= createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
