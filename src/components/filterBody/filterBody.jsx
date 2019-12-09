import React from 'react';
import Dropdown from '../dropdown';

export default class FilterBody extends React.Component {
  render() {
    return (
      <>
        <Dropdown text="Contexts" />
        <Dropdown text="Dimensions" />
      </>
    );
  }
}
