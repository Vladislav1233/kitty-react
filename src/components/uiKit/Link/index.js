import React from 'react';
import './style/index.scss';
import bem from 'helpers/bem';
import Pt from 'prop-types';

const bemCls = bem('link');

const Link = ({ children, title, href, onClick, onMouseEnter, onMouseLeave }) => (
  <a 
    className={bemCls()}
    href={href} 
    title={title} 
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </a>
);

Link.propTypes = {
  children: Pt.any.isRequired,
  title: Pt.string,
  href: Pt.string.isRequired,
  onClick: Pt.func
};

Link.defaultProps = {
  href: '#'
};

export default Link;
