import React from 'react';


const ProductDetailSpecification = (props) => {
  const {data, title} = props.content;
  return (
    <div className="product-content__specification">
      <h2 className="product-content__specification__title">{title}</h2>
      {data && (<ul className="specification-list">
        {data.map((item, ind) => 
          <li key={`product-specified-${ind}`} className="specification-item">
            <span className="specification-item__key">{item.key}</span>
            <span className="specification-item__value">{item.value}</span>
        </li>)}
      </ul>)}
    </div>
  );
}

export default ProductDetailSpecification;
