import React from 'react';
import { Provider } from 'mobx-react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './router';
import store from './mobx';

const AppContainer = createAppContainer(AppNavigator);

export default () => (
  <Provider rootStore={store}>
    <AppContainer />
  </Provider>
);
