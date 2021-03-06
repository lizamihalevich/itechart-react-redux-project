import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';

import './ListItemCheckbox.scss';

export default class ListItemCheckbox extends React.PureComponent {
  render() {
    const { checked } = this.props;

    const className = classNames('list-item-checkbox__square', {
      'list-item-checkbox__square_clicked': checked
    });

    return (
      <div className="list-item-checkbox">
        {checked ? (
          <FontAwesomeIcon className={className} icon={faCheckSquare} />
        ) : (
          <FontAwesomeIcon className={className} icon={faSquare} />
        )}
      </div>
    );
  }
}

ListItemCheckbox.propTypes = {
  checked: PropTypes.bool
};
