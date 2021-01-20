import React from 'react';


const ProductDetailHighLight = (props) => {
  const {content} = props;
  return (
    <div className="product-content__highlight">
      <div contentEditable='false' dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}

export default ProductDetailHighLight;
