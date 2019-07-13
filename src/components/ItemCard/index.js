import React, { Component, Fragment } from 'react';
import './style/index.scss';
import bem from 'helpers/bem';
import Pt from 'prop-types';

// Note: components
import DescriptionText from 'components/DescriptionText';
import WeightLabel from 'components/WeightLabel';
import AboutBuy from 'components/AboutBuy';
import Link from 'components/uiKit/Link';

export const bemCls = bem('item-card');

class ItemCard extends Component {

  state = {
    isSelected: false, // selected or disabled
    isHover: false
  };

  onChooseCard = () => {
    if (!this.props.disabled) {
      this.setState({
        isSelected: !this.state.isSelected,
        isHover: false
      });
    }
  };

  onEnterCard = () => {
    if(!this.props.disabled) {
      this.setState({
        isHover: true
      });
    }
  };

  onLeaveCard = () => {
    if(!this.props.disabled) {
      this.setState({
        isHover: false
      });
    }
  };

  render() {
    const { src, disabled, item } = this.props;
    const { isSelected, isHover } = this.state;

    const aboutBuyContent = () => {
      if (disabled) {
        return `Печалька, ${item.descritpionName} закончился.`;
      } else if (isSelected) {
        return item.textSelectedCard;
      }

      return <Fragment>
        Чего сидишь? Порадуй котэ, <Link 
          title='купи' 
          onClick={this.onChooseCard}
          onMouseEnter={this.onEnterCard}
          onMouseLeave={this.onLeaveCard}
        >
          купи
        </Link>
      </Fragment>;
    };

    return(
      <Fragment>
        <article 
          className={bemCls({ 
            selected: isSelected, 
            disabled: disabled,
            hover: isHover
          })} 
          onClick={this.onChooseCard}
          onMouseEnter={this.onEnterCard}
          onMouseLeave={this.onLeaveCard}
        >
          <div className={bemCls('head')}>
            <div className={bemCls('figure')}></div>
            <DescriptionText 
              data={item.descriptionTitle}
              modif='large b-description-text--main'
            />
          </div>

          <div className={bemCls('information')}>
            <div className={bemCls('image-wrapper')}>
              <img  src={src} alt="Фото пушистого светлого кота с одетой на шею цепочкой на которой висит логотип компании фанбокс."/>
            </div>

            <div className={bemCls('content')}>
              <h2 className={bemCls('name')}>
                {item.name}
                <span>{item.descritpionName}</span>
              </h2>

              {item.descriptionText.map((itemDescription, indexDescription) => (
                <DescriptionText 
                  key={indexDescription}
                  data={itemDescription}
                />
              ))}

              <div className={bemCls('weight')}>
                <WeightLabel 
                  value={item.weight}
                  isSelected={isSelected}
                  isDisabled={disabled}
                  isHover={isHover}
                />
              </div>
            </div>
          </div>
        </article>

        <AboutBuy modif={disabled && 'disabled'}>
          {aboutBuyContent()}
        </AboutBuy>
      </Fragment>
    )
  }
}

ItemCard.propTypes = {
  src: Pt.string.isRequired,
  disabled: Pt.bool
};

export default ItemCard;
