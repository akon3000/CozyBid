import React, { Component } from 'react';
import SearchIcon from 'react-icons/lib/fa/search';

import './styles.scss';

import UserIcon from '../../assert/007.png';
import LogoIcon from '../../assert/photo.svg';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="component-topbar" ref="el">
        <div className="logo">
          <button>
            <img src={LogoIcon} />
          </button>
        </div>
        <div className="search">
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
        </div>
      </div>
    );
  }
}

export default TopBar;
