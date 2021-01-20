import React from 'react';

import FooterSprite from './FooterSprite';


const FooterListContent = ({title, list}) => {
  return (
    <>
      <div className="footer-title">{title}</div>
      {list && (
        <ul className="footer-list footer-list-sprite">
          {list.map((item, ind) => (<li key={'footer-list-item-'+ ind}>
            <FooterSprite spriteClassName={item.spriteClassName} inlineStyle={item.inlineStyle} />
          </li>))
          }
        </ul>
      )}
    </>
  );
}

export default FooterListContent;
