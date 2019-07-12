import React, { Component } from 'react';

// Note: components
import PageTitle from 'components/uiKit/PageTitle';
import ProductList from 'components/ProductList';
import PhotoCat from 'style/images/content/cat-photo.png';

// Todo: test data. Integration it.
const dataProductList = [{
  src: PhotoCat,
  descriptionTitle: {
    text: 'Сказочное заморское яство'
  },
  name: 'Нямушка',
  descritpionName: 'с фуа-гра',
  descriptionText: [{
    prefix: '10',
    text: 'порций'
  }, {
    text: 'мышь в подарок'
  }],
  weight: '0,5'
}, {
  src: PhotoCat,
  descriptionTitle: {
    text: 'Сказочное заморское яство'
  },
  name: 'Нямушка',
  descritpionName: 'с рыбой',
  descriptionText: [{
    prefix: '40',
    text: 'порций'
  }, {
    text: '2 мыши в подарок'
  }],
  weight: '2'
}, {
  src: PhotoCat,
  descriptionTitle: {
    text: 'Сказочное заморское яство'
  },
  name: 'Нямушка',
  descritpionName: 'с курой',
  descriptionText: [{
    prefix: '100',
    text: 'порций'
  }, {
    text: '2 мыши в подарок'
  }, {
    text: 'Заказчик доволен'
  }],
  weight: '5'
}];

class Main extends Component {
  render() {
    return(
      <div className="b-main-page">
        <div className="b-container">
          <PageTitle>Ты сегодня покормил кота?</PageTitle>

          <ProductList 
            list={dataProductList}
          />
        </div>
      </div>
    )
  }
}

export default Main;