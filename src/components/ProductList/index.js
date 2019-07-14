import React, { Component } from 'react';
import './style/index.scss';
import bem from 'helpers/bem';
import Pt from 'prop-types';

// Note: components
import ItemCard from 'components/ItemCard';

const bemCls = bem('product-list');


//- Note: structure of data.
//- [{
//-     src: '',
//-     descriptionTitle: {
//-         text: ''
//-     }
//-     name: '',
//-     descritpionName: '',
//-     descriptionText: [{
//-         prefix: '', - optional
//-         text: ''
//-     }],
//-     weight: '',
//      disabled: bool
//- }]

class ProductList extends Component {

  render() {
    const { list, isIE } = this.props;

    return(
      <ul className={bemCls()} style={isIE ? {alignSelf: 'center'} : {}}>
        {list && list.length && list.map((item, index) => (
          <li key={index} className={bemCls('item')}>
            <ItemCard item={item} src={item.src} disabled={item.disabled} />
          </li>
        ))}
      </ul>
    )
  }
}

ProductList.propTypes = {
  list: Pt.array.isRequired
};

export default ProductList;
