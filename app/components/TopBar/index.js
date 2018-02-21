import React, { Component } from 'react';

import './styles.scss';

import LogoIcon from '../../assert/photo.svg';
import AddIcon from '../../assert/image-add.svg';
import RemoveIcon from '../../assert/remove-folder.svg';

import { RANDOM_IMAGE, ADD_IMAGE, REMOVE_ALL_IMAGE, MAKE_LAYOUTS } from '../ReduxStore/type';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  randomLayout() {
    this.props.dispatch({ type: RANDOM_IMAGE });
  }

  removeAll() {
    this.props.dispatch({ type: REMOVE_ALL_IMAGE });
  }

  addImage() {
    this.props.dispatch({ type: ADD_IMAGE });
    this.props.dispatch({ type: MAKE_LAYOUTS });
  }

  render() {
    return (
      <div className="component-topbar" ref="el">
        <div className="logo">
          <button onClick={() => this.addImage()}>
            <img src={AddIcon} style={{ marginTop: 8 }} />
          </button>
        </div>
        <div className="logo">
          <button onClick={() => this.randomLayout()}>
            <img src={LogoIcon} style={{ marginTop: 5 }} />
          </button>
        </div>
        <div className="logo">
          <button onClick={() => this.removeAll()}>
            <img src={RemoveIcon} style={{ marginTop: 5 }} />
          </button>
        </div>
      </div>
    );
  }
}

export default TopBar;
