import React from 'react';

import {FooterStyle} from './Style/FooterStyle';

import FooterOne from './FooterOne';
import FooterTwo from './FooterTwo';

const FooterContainer = () => {
  return (
    <FooterStyle >
      <footer id="footer">
        <FooterOne />
        <FooterTwo />
      </footer>
    </FooterStyle>
    
  );
}

export default FooterContainer;
