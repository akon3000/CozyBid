import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import './styles.scss';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.reducer.getState()
    };
  }

  componentDidMount() {
   this.props.reducer.subscribe(() => {
     console.log(this.props.reducer.getState());
     this.setState({ data: this.props.reducer.getState() });
   });
  }

  render() {
    const { onChoose, tobBarHeight } = this.props;
    const layouts = { lg: [], md: [], sm: [], xs: [] };
    this.state.data.forEach((x) => {
      layouts.lg.push({ i: x.id.toString(), ...x.lg });
      layouts.md.push({ i: x.id.toString(), ...x.md });
      layouts.sm.push({ i: x.id.toString(), ...x.sm });
      layouts.xs.push({ i: x.id.toString(), ...x.xs });
    });
    
    return (
      <div className="component-content" style={{ paddingTop: tobBarHeight }}>
        <div className="gridCentrade">
          <ResponsiveReactGridLayout
            isDraggable={Boolean(false)}
            isResizable={Boolean(false)}
            layouts={layouts}
            breakpoints={{ lg: 1440, md: 1024, sm: 768, xs: 425 }}
            cols={{ lg: 12, md: 12, sm: 12, xs: 12 }}
          >
            { 
              this.state.data.map((x, index) => (
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
