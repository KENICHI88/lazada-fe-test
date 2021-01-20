import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    line-height: 1.3;
    scroll-behavior: smooth;
    background-color: ${props => props.theme.grayColor};
  }
  
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
  
  img {max-width: 100%;}
  
  a {
    color: ##0f136d;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  
  ul {
    padding: 0;
    list-style: none;
  }
  
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .row {
    margin-left: -15px;
    margin-right: -15px;
  }
  
  .inner-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1170px;
    padding-left: 8px;
    padding-right: 8px;
  }
  
  .pull-left {
    float: left;
  }
  .pull-right {
    float: right;
  }
  .no-pull {
    float: none;
  }
  .text-center {
    text-align: center;
  }
  
  .col-25 {
    width: 25%;
  }
  .col-50 {
    width: 50%;
  }
  .col-75 {
    width: 75%;
  }
  
  
`;

export default GlobalStyle;
