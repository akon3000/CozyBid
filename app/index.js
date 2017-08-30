import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './gobal.scss';
import TopBar from './components/TopBar';
import Content from './components/Content';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tobBarHeight: 0,
    };
  }

  componentDidMount() {
    this.setPositionContent();
  }

  setPositionContent() {
    this.setState({ tobBarHeight: this.topbarEl.refs.el.offsetHeight });
  }

  render() {
    return (
      <div>
        <TopBar ref={(el) => { this.topbarEl = el; }} />
        <Content tobBarHeight={this.state.tobBarHeight} />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));