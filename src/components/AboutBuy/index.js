import React from 'react';
import './style/index.scss';
import bem from 'helpers/bem';
import Pt from 'prop-types';

const bemCls = bem('about-buy');

const AboutBuy = ({ children, modif }) => (
  <p className={bemCls('', modif)}>
    {children}
  </p>
)

AboutBuy.propTypes = {
  modif: Pt.string
};

export default AboutBuy;
