import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'react-icons/lib/md/close';

import './styles.scss';

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onClose, data } = this.props;
    return (
      <div className="component-overlay">
        <CloseIcon onClick={() => onClose()} className="close-btn" />
        <div className="overlay" onClick={() => onClose()} />
        <div className="container">
          <div className="box">
            <a href={data.refer} target="_blank">
              <button className="linkto">Go To Website</button>
            </a>
            <br />
            <img src={data.url} alt={data.refer} />
          </div>
        </div>
      </div>
    );
  }
}

Overlay.propsTypes = {
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Overlay;
