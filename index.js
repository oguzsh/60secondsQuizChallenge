import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './src/redux/reducers';
import thunk from 'redux-thunk';

import {name as appName} from './app.json';

export default function Main() {
  const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, storeEnhancers(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
