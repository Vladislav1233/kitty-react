import React from 'react';
import './style/index.scss';
import bem from 'helpers/bem';
import Pt from 'prop-types';

const bemCls = bem('link');

const Link = ({ children, title, href }) => (
  <a className={bemCls()} href={href} title={title}>
    {children}
  </a>
);

Link.propTypes = {
  children: Pt.isRequired,
  title: Pt.string,
  href: Pt.string.isRequired
};

Link.defaultProps = {
  href: '#'
};

export default Link;
