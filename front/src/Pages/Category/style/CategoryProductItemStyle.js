import styled from 'styled-components';

export const CategoryProductItemStyle = styled('div').attrs({className: 'product-item'})`
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 20px;
  a {
    display: block;
    &:hover {
      text-decoration: none;
    }
  }
  
  
  .product-item {
    &__container {
      background-color: ${props => props.theme.whiteColor};
      height: 100%;
      transition: all .1s ease-in-out;
      &:hover {
        box-shadow: 1px 2px 10px -2px rgba(0,0,0,.3);
      }
    }
    &__content {
      padding: 15px 8px 10px;
    }
    &__media {
      margin-bottom: 10px;
      img {
        width: 100%;
      }
    }
    &__name {
      font-size: 14px;
      height: 36px;
      line-height: 19px;
      position: relative;
      color: #212121;
      white-space: pre-wrap;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
    }
    &__price {
      color: ${props => props.theme.redColor};
      .currency {
        font-size: 12px;
      }
      .price {
        font-size: 18px;
      }
    }
    &__discount {
      color: ${props => props.theme.grayColor2};
      font-size: 12px;
      .discount,
      .currency {
        text-decoration: line-through;
        margin-right: 3px;
      }
      .discount-percent {
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
`;
