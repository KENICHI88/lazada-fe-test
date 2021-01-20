import React from 'react';
import FooterListContent from './FooterListContent';

import FooterSprite from './FooterSprite';

import {
  footerListContent1,
  footerListContent2,
} from '../../mock/footerContent';

const FooterOne = () => {
  return (
    <div className="footer-row footer-row-one">
      <div className="inner-container">
        <div className="footer-col col-25 pull-left">
          <FooterListContent 
            title='CONTACT US'
            list={footerListContent1}
          />
        </div>
        <div className="footer-col col-25 pull-left">
        <FooterListContent 
            title='LAZADA VIETNAM'
            list={footerListContent2}
          />
        </div>
        <div className="footer-col col-50 pull-left">
          <div className="footer-download">
            <div className="footer-download-text pull-left">
              <span className="footer-logo pull-left"></span>
              <div className="footer-download-text-container pull-left">
                <div className="title">Go where your heart beats</div>
                <div className="text">Download the App</div>
              </div>
            </div>
            <div className="footer-download-images pull-left">
              <a href="#" target="_blank" className="pull-left">
                <FooterSprite spriteName="footer-logo-google-play" inlineStyle={''}/>
              </a>
              <a href="#" target="_blank" className="pull-left">
                <FooterSprite spriteName="footer-logo-app-store" inlineStyle={''}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterOne;
