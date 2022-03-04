<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


ReactDOM.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById('root')
=======
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
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
);