import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1. In order to use React with Redux, we need react-redux.
import { Provider } from 'react-redux';

// 2. Create a redux store, so that: Redux exists and the provider has the store
import { createStore } from 'redux';

// 3. Reducers to populate the store.  Reducers go into the rootReducer.  Make individual reducers to go into the rootReducer
import rootReducer from './reducers/rootReducer';

// 4. Actually create the store by passing it the rootReducer
const aPublix = createStore(rootReducer);

// Provider is the component that glues React and Redux.  We hand the provider to ReactDOM.render, and we hand the provider a prop of store

ReactDOM.render(
    <Provider store = {aPublix}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

