//React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//React Redux
import { Provider } from 'react-redux';

//store
import { store } from './store/store';

//componenten
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

    , document.getElementById('root')
);