import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './features/FiltersWidget';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider>
          <Filter />
      </Provider>
     
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
