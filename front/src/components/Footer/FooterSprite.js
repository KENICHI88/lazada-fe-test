import React from 'react';

const FooterSprite = ({spriteClassName, inlineStyle}) => {
  return (
    <span className={`footer-sprite ${spriteClassName}`}  style={{inlineStyle}} ></span>
  );
}

export default FooterSprite;
