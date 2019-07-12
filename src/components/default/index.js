// Note: if you need to create a component you can copy this file and rename one instead Default.

import React, { Component } from 'react';
import './style/index.scss';
import bem from 'helpers/bem';

const bemCls = bem('default');

class Default extends Component {
  render() {
    return(
      <div className={bemCls()}></div>
    )
  }
}

export default Default;
