import React from 'react';
import FooterListSprite from './FooterListSprite';

import {
  footerListSprite1,
} from '../../mock/footerContent';

const FooterOne = () => {
  return (
    <div className="footer-row footer-row-two">
      <div className="inner-container">
        <div className="footer-col col-50 pull-left">
          <FooterListSprite 
            title='Payment Methods'
            list={footerListSprite1}
          />
        </div>
      </div>
    </div>
  );
}

export default FooterOne;
