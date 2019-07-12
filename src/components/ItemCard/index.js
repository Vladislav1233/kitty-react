import React, { Component } from 'react';
import './style/index.scss';
import bem from 'helpers/bem';
import Pt from 'prop-types';

export const bemCls = bem('item-card');

class ItemCard extends Component {

  render() {
    const { src, children } = this.props;

    return(
      <article className={bemCls()}>
        <div className={bemCls('image-wrapper')}>
          <img  src={src} alt="Фото пушистого светлого кота с одетой на шею цепочкой на которой висит логотип компании фанбокс."/>
        </div>

        {children}

      </article>
    )
  }
}

ItemCard.propTypes = {
  src: Pt.string.isRequired
};

export default ItemCard;
