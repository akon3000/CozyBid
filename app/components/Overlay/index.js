import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'react-icons/lib/md/close';

import { CHANGE_IMAGE } from '../ReduxStore/type';

import './styles.scss';

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.data.url
    };
  }

  handleImage() {
    this.props.reducer.dispatch({ type: CHANGE_IMAGE, id: this.props.data.id, url: this.state.img });
    this.props.onClose();
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
            <br />
            <br />
            <button className="linkto" onClick={() => this.handleImage()}>Change Image</button>
            <input className="input-box" placeholder={this.state.img} onChange={(event) => this.setState({ img: event.target.value })} />
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
