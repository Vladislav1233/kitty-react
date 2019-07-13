import React, { Component } from 'react';
import './style/index.scss';
import bem from 'helpers/bem';
import Pt from 'prop-types';

const bemCls = bem('weight-label');

class WeightLabel extends Component {
  render() {
    const { value, isSelected, isDisabled, isHover } = this.props;

    return(
      <div className={bemCls({ 
        selected: isSelected,
        disabled: isDisabled,
        hover: isHover
      })}>
        <div className={bemCls('value')}>{value}</div>
        <div className={bemCls('unit')}>кг</div>
      </div>
    )
  }
}

WeightLabel.propTypes = {
  value: Pt.string.isRequired,
  isDisabled: Pt.bool,
  isSelected: Pt.bool,
  isHover: Pt.bool
};

export default WeightLabel;