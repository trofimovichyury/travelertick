import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '../../node_modules/rc-slider/assets/index.css';
import '../../node_modules/rc-tooltip/assets/bootstrap.css';
import '../css/style.css';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers);

render((
    <Provider store={store} >
        <App />
    </Provider>
), document.getElementById('root'));

