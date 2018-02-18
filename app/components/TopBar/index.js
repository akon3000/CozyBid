import React, { Component } from 'react';
// import SearchIcon from 'react-icons/lib/fa/search';

import './styles.scss';

// import UserIcon from '../../assert/007.png';
import LogoIcon from '../../assert/photo.svg';
import AddIcon from '../../assert/image-add.svg';
import RemoveIcon from '../../assert/remove-folder.svg';

import { RANDOM_IMAGE, ADD_IMAGE, REMOVE_ALL_IMAGE } from '../ReduxStore/type';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  randomLayout() {
    this.props.reducer.dispatch({ type: RANDOM_IMAGE });
  }

  removeAll() {
    this.props.reducer.dispatch({ type: REMOVE_ALL_IMAGE });
  }

  addImage() {
    this.props.reducer.dispatch({ type: ADD_IMAGE });
    this.randomLayout();
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
        {/* <div className="search">
          <button>
            <div className="btn-line">
              <SearchIcon className="icon-search" />
              <input className="input-search" placeholder="ค้นหา" />
            </div>
          </button>
        </div>
        <div className="user">
          <button>
            <img src={UserIcon} />
            <label>Tinnapop Suraphon</label>
          </button>
        </div> */}
      </div>
    );
  }
}

export default TopBar;
