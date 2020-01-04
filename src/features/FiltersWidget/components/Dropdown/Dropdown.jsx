import React from 'react';

import Header from '../Header';
import ListItem from '../ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { getDimensions } from '../../../../app/data';
import { setDimensions } from '../../../../app/actions';

import './Dropdown.scss';
import { connect } from 'react-redux';

class Dropdown extends React.PureComponent {
  state = {
    isOpened: false
  };

  handleClick = () => {
    this.setState(state => ({
      isOpened: !state.isOpened
    }));
  };

  render() {
    const { header, items } = this.props;
    const { isOpened } = this.state;

    const listItems = items.map(item => {
      return <ListItem key={item.id} name={item.title} />;
    });

    return (
      <div className="dropdown">
        <FontAwesomeIcon
          className="dropdown__icon"
          icon={isOpened ? faChevronUp : faChevronDown}
          onClick={this.handleClick}
        />
        <Header onClick={this.handleClick} headerTitle={header} />

        {isOpened && <div className="dropdown__panel">{listItems}</div>}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  header: ''
};

Dropdown.propTypes = {
  header: PropTypes.string
};

const mapDispatchToProps = {
  setDimensions
};

export default connect(null, mapDispatchToProps)(Dropdown);
