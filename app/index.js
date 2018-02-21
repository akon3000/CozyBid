import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StoreImage from './components/ReduxStore/StoreImage';

import './gobal.scss';
import TopBar from './components/TopBar';
import Content from './components/Content';
import Overlay from './components/Overlay';

class Application extends Component {
  constructor(props) {
    super(props);
    const { layouts, dataImage } = StoreImage.getState();
    this.state = {
      tobBarHeight: 0,
      dataOverlay: null,
      isOverlay: false,
      layouts,
      dataImage
    };
  }

  componentDidMount() {
    this.setPositionContent();
    StoreImage.subscribe(() => {
      const nextState = StoreImage.getState();
      console.log(nextState);
      this.setState({ layouts: nextState.layouts, dataImage: nextState.dataImage });
    });
  }

  setPositionContent() {
    this.setState({ tobBarHeight: this.topbarEl.refs.el.offsetHeight });
  }

  render() {
    return (
      <div>
        
        <TopBar
          dispatch={(action) => StoreImage.dispatch(action)}
          ref={(el) => { this.topbarEl = el; }}
        />

        <Content
          tobBarHeight={this.state.tobBarHeight}
          onChoose={(dataOverlay) => this.setState({ dataOverlay, isOverlay: true })}
          layouts={this.state.layouts}
          dataImage={this.state.dataImage}
        />
        
        { this.state.isOverlay &&
          <Overlay
            dispatch={(action) => StoreImage.dispatch(action)}
            data={this.state.dataOverlay}
            onClose={() => this.setState({ isOverlay: false, dataOverlay: null })}
          />
        }

      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));