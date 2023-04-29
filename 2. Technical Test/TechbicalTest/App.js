import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation';
import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
