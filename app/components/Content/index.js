import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactGridLayout from 'react-grid-layout';

import './styles.scss';

import DataImage from './data-image';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataImage: DataImage,
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.setState({ width: window.innerWidth }));
  }

  render() {
    const layout = [];
    this.state.dataImage.forEach((x) => {
      layout.push({ i: x.id.toString(), ...x.layout });
    });
    
    return (
      <div className="component-content" style={{ paddingTop: this.props.tobBarHeight }}>
        <div className="gridCentrade">
          <ReactGridLayout
            isDraggable={Boolean(false)}
            isResizable={Boolean(false)}
            layout={layout}
            rowHeight={30}
            cols={12}
            width={this.state.width}
          >
            { 
              this.state.dataImage.map((x, index) => (
                <div key={x.id} className="item">
                  <div className="content">
                    <img src={x.url} alt={x.refer} />
                  </div>
                </div>
              ))
            }
          </ReactGridLayout>
        </div>
      </div>
    )
  }
}

Content.propTypes = {
  tobBarHeight: PropTypes.number,
};

Content.defaultProps = {
  tobBarHeight: 50,
};

export default Content;
