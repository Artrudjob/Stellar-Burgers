import React from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'redux';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import store from "./services/store";
import {Provider} from "react-redux";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>,
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

export default store;