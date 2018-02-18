import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import './styles.scss';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataImage: props.dataImage,
      layouts: props.layouts
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dataImage: nextProps.dataImage, layouts: nextProps.layouts });
  }

  render() {
    const { onChoose, tobBarHeight } = this.props;
    console.log(this.state.layouts)
    return (
      <div className="component-content" style={{ paddingTop: tobBarHeight }}>
        <div className="gridCentrade">
          <ResponsiveReactGridLayout
            isDraggable={Boolean(false)}
            isResizable={Boolean(false)}
            layouts={this.state.layouts}
            rowHeight={80}
            breakpoints={{ lg: 1440, md: 1024, sm: 768, xs: 425 }}
            cols={{lg: 12, md: 10, sm: 6, xs: 4}}
          >
            { 
              this.state.dataImage.map((x, index) => (
                <div key={x.id} className="item">
                  <div className="content" onClick={() => onChoose(x)}>
                    <img src={x.url} alt={x.refer} />
                  </div>
                </div>
              ))
            }
          </ResponsiveReactGridLayout>
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  onChoose: PropTypes.func.isRequired,
  tobBarHeight: PropTypes.number,
};

Content.defaultProps = {
  tobBarHeight: 50,
};

export default Content;
