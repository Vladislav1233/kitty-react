import React, { Component } from 'react';
import './style/index.scss';
import bem from 'helpers/bem';
import Pt from 'prop-types';

const bemCls = bem('description-text');

class DescriptionText extends Component {

  render() {
    const { data, modif } = this.props;

    return(
      <p className={bemCls('', modif)}>
        {data.prefix ? <span className={bemCls('prefix')}>{data.prefix}</span> : null}
        {data.text}
      </p>
    )
  }
}

DescriptionText.propTypes = {
  data: Pt.shape({
    prefix: Pt.string,
    text: Pt.string.isRequired
  }),
  modif: Pt.string
};

export default DescriptionText;