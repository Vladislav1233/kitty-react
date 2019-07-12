import React, { Component } from 'react';
import './style/index.scss';
import bem from 'helpers/bem';
import Pt from 'prop-types';

// Note: components
import ItemCard from 'components/ItemCard';
import DescriptionText from 'components/DescriptionText';
import WeightLabel from 'components/WeightLabel';
import AboutBuy from 'components/AboutBuy';
import Link from 'components/uiKit/Link';

import { bemCls as bemItemCard } from 'components/ItemCard';
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
//-     weight: ''
//- }]

class ProductList extends Component {

  render() {
    const { list } = this.props;

    return(
      <ul className={bemCls()}>
        {list && list.length && list.map((item, index) => (
          <li key={index} className={bemCls('item')}>
            <ItemCard src={item.src}>
              <div className={bemItemCard('information')}>
                <h2 className={bemItemCard('name')}>
                  {item.name}
                  <span>{item.descritpionName}</span>
                </h2>

                <DescriptionText 
                  data={item.descriptionTitle}
                  modif='large'
                />

                {item.descriptionText.map((itemDescription, indexDescription) => (
                  <DescriptionText 
                    key={indexDescription}
                    data={itemDescription}
                  />
                ))}

                <div className={bemItemCard('weight')}>
                  <WeightLabel 
                    value={item.weight}
                  />
                </div>
              </div>
            </ItemCard>

            <AboutBuy>
              Чего сидишь? Порадуй котэ, <Link title={'купи'}>купи</Link>
            </AboutBuy>
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
