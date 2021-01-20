import styled from 'styled-components';

import footerIcons from '../../../assets/images/footer-icons.png';
import footerLogo from '../../../assets/images/footer-logo.png';

export const FooterStyle = styled.div`
  .footer {
    &-row {
      padding-top: 15px;
      padding-bottom: 15px;
      
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      &-one {
        background-color: ${props => props.theme.grayColor};
      }
    }
    &-sprite {
      background: url(${footerIcons}) no-repeat left top transparent;
      display: inline-block;
    }
    &-logo {
      background: url(${footerLogo}) no-repeat left top transparent;
      display: inline-block;
      width: 42px;
      height: 42px;
      
      &-google-play {
        background-position: -190px -124px;
        width: 126px;
        height: 42px;
        margin: 1px 0 0 20px;
      }
      &-app-store {
        background-position: -568px -374px;
        width: 128px;
        height: 43px;
        margin-left: 10px;
      }
      
    }
    &-title {
      text-transform: uppercase;
      font-weight: 700;
    }
    
    &-list {
      font-size: 12px;
      a {
      }
    }
    
    &-download {
      .title {
        color: ${props => props.theme.hightLightColor};
        font-size: 16px;
      }
      .text {
        font-size: 14px;
      }
      &-text-container {
        margin-left: 5px;
      }
    }
  }
`;
