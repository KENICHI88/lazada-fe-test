import styled from 'styled-components';

export const CategoryProductListStyle = styled('div').attrs({className: 'category__product-list'})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  .product-item {
    width: 50%;
  }
  
  @media ${props => props.theme.mediaQueries.minTablet} {
    .product-item {
      width: 33.32%;
    }
  }
  
  @media ${props => props.theme.mediaQueries.minLaptopSmall} {
    .product-item {
      width: 25%;
    }
  }
  @media ${props => props.theme.mediaQueries.minLaptopLarge} {
    .product-item {
      width: 20%;
    }
  }
  
  @media ${props => props.theme.mediaQueries.minLaptopLarge} {
    .product-item {
      width: calc(100% / 6);
    }
  }
`;
