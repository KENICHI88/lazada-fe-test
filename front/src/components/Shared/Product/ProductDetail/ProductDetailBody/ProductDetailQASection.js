import React, {useState} from 'react';

import ProductDetailQAItem from './ProductDetailQAItem';


import Pagination from '../../../Pagination/Pagination';

const ProductDetailQASection = (props) => {
  const {data} = props;
  const [currentPage, setCurrentPage] = useState(0);
  
  const handlePagingOnclick = (pagination) => {
    const {selected} = pagination;
    setCurrentPage(selected);
    props.handlePagingOnclick(selected);
  }
  
  return (
    <div className="product-detail__qa-section">
      <div className="product-detail__qa-section__container">
        {data.data && data.data.map((item, ind) => <ProductDetailQAItem key={`product-qa-${item.itemId}`} data={item} />)}
      </div>
      <Pagination 
        pageCount={data.totalPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        handlePagingOnclick={handlePagingOnclick}
      />
    </div>
  );
}

export default ProductDetailQASection;
