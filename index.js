import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './src/redux/reducers';
import thunk from 'redux-thunk';

import {name as appName} from './app.json';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

export default function Main() {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
