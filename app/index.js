import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './gobal.scss';
import TopBar from './components/TopBar';
import Content from './components/Content';
import Overlay from './components/Overlay';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tobBarHeight: 0,
      dataOverlay: null,
      isOverlay: false,
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
        
        <TopBar
          ref={(el) => { this.topbarEl = el; }}
        />

        <Content
          tobBarHeight={this.state.tobBarHeight}
          onChoose={(dataOverlay) => this.setState({ dataOverlay, isOverlay: true })}
        />
        
        { this.state.isOverlay &&
          <Overlay
            data={this.state.dataOverlay}
            onClose={() => this.setState({ isOverlay: false, dataOverlay: null })}
          />
        }

      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));