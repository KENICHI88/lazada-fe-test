import React, {useState} from 'react';

import ProductDetailReviewItem from './ProductDetailReviewItem';

import Pagination from '../../../Pagination/Pagination';

const ProductDetailReviewSection = (props) => {
  const {data} = props;
  const [currentPage, setCurrentPage] = useState(0);
  
  const handlePagingOnclick = (pagination) => {
    const {selected} = pagination;
    setCurrentPage(selected);
    props.handlePagingOnclick(selected);
  }
  
  return (
    <div className="product-detail__review-section">
      <div className="product-detail__review-section__container">
        {data.data && data.data.map((item, ind) => <ProductDetailReviewItem key={item.id} data={item} />)}
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

export default ProductDetailReviewSection;
