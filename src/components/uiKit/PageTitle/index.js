import React from 'react';
import './style/index.scss';

const PageTitle = ({ children, isIE }) => (
  <h1 className="b-page-title" style={isIE ? {alignSelf: 'center'} : {}}>{children}</h1>
);

export default PageTitle;