import React, { Component } from 'react';
import './style/index.scss';
import bem from 'helpers/bem';
import Pt from 'prop-types';

const bemCls = bem('weight-label');

class WeightLabel extends Component {
  render() {
    const { value } = this.props;

    return(
      <div className={bemCls()}>
        <div className={bemCls('value')}>{value}</div>
        <div className={bemCls('unit')}>кг</div>
      </div>
    )
  }
}

WeightLabel.propTypes = {
  value: Pt.string.isRequired
};

export default WeightLabel;