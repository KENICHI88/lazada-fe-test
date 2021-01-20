import React from 'react';

const ProductDeliverySeller = () => {
  return (
    <div className="seller__delivery">
      <div className="delivery__location">
        <i className="laz-icon laz-icon__address location__icon lazada lazada-ic-loc lazada-icon"></i>
        <div className="location__address">Hồ Chí Minh, Quận 1, Phường Phạm Ngũ Lão</div>
      </div>
      <div className="delivery__options">
        <div className="delivery__option">
          <div className="delivery__option__item">
            <i className="laz-icon laz-icon__address location__icon lazada lazada-ic-loc lazada-icon"></i>
            <div className="delivery__option__info">
              <div className="delivery__option__item__title">Standard Delivery</div>
              <div className="delivery__option__item__time">1 - 4 day(s)</div>
            </div>
            <div className="delivery__option__shipping-fee">₫9,900</div>
          </div>
        </div>
        
        <div className="delivery__option">
          <div className="delivery__option__item">
            <i className="laz-icon laz-icon__address location__icon lazada lazada-ic-loc lazada-icon"></i>
            <div className="delivery__option__info">
              <div className="delivery__option__item__title">Cash on Delivery Available (No mutual check)</div>
            </div>
            <div className="delivery__option__shipping-fee">₫9,900</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDeliverySeller;
