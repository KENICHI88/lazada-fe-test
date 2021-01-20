import React from 'react';


const ProductDetailContent = (props) => {
  const {content} = props;
  return (
    <div className="product-content__content">
      <div contentEditable='false' dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}

export default ProductDetailContent;
