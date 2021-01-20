import React from 'react';

const FooterListContent = ({title, list}) => {
  return (
    <>
      <div className="footer-title">{title}</div>
      {list && (
        <ul className="footer-list">
          {list.map((item, ind) => (<li key={'footer-list-item-'+ ind}>
            <a href={item.url} title={item.title} target="_blank">{item.title}</a>
          </li>))
          }
        </ul>
      )}
    </>
  );
}

export default FooterListContent;
