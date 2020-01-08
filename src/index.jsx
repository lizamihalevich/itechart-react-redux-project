import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Filter from './features/FiltersWidget';
import store from './app/store';

const App = () => (
  <Provider store={store}>
    <Filter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
