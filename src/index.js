import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './features/FiltersWidget';
import { Provider } from 'react-redux';
import store from './app/store';
import {setContexts} from './app/actions'
import { getContexts, getDimensions, getFilters } from './app/data';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Filter />
      </Provider>
     
    );
  }
}

store.dispatch(setContexts(getContexts()))

ReactDOM.render(<App />, document.getElementById('app'));
