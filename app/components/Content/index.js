import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="component-content" style={{ paddingTop: this.props.tobBarHeight }}>
        <div className="gridCentrade">
          cascsasca
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
