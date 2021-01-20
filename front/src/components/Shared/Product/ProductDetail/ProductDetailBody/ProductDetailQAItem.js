import React from 'react';


const ProductDetailQAItem = (props) => {
  const {user, content, date, answers} = props.data;
  const firstAnswer = answers ? answers[0] : null;
  return (
    <div className="qa-item">
      <div className="qa-item__container">
        <div className="qa-item__row qa-item__question">
          <div className="qa-item__icon">
            <span className="lazada lazada-ic-Q lazada-icon qna-icon qna-icon-q"></span>
          </div>
          <div className="qa-item__content-group">
            <div className="qa-item__content">{content}</div>
            <div className="qa-item__meta">
              {user} - {date}
            </div>
          </div>
        </div>
        {firstAnswer && (
          <div className="qa-item__row qa-item__asnwer">
            <div className="qa-item__icon">
              <span className="lazada lazada-ic-A lazada-icon qna-icon qna-icon-a"></span>
            </div>
            <div className="qa-item__content-group">
              <div className="qa-item__content">{firstAnswer.content}</div>
              <div className="qa-item__meta">
                {firstAnswer.user} - {firstAnswer.date}
              </div>
            </div>
          </div>)}
        
      </div>
    </div>
  );
}

export default ProductDetailQAItem;
