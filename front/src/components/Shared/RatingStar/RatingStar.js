import React from 'react';

import './RatingStar.scss';

import fullStar from '../../../assets/images/icon-star-full.png';
import halfStar from '../../../assets/images/icon-star-half.png';
import emptyStar from '../../../assets/images/icon-star-empty.png';

const RatingStar = (props) => {
  const {average = 0, baseNumber = 5, inlineClasses = ''} = props;
  const renderStars = () => {
    let rs = [];
    for(let i = 0; i < baseNumber; i++) {
      (parseFloat(average) > i) ? rs.push(<img key={`star-${i}`} className="rating-star__icon" src={fullStar}></img>) : (parseFloat(average) > i && parseFloat(average) < i +1) ?
        rs.push(<img key={`star-${i}`} className="rating-star__icon" src={halfStar}></img>) : 
        rs.push(<img key={`star-${i}`} className="rating-star__icon" src={emptyStar}></img>);
      
    }
    return rs;
  }
  
  return (
    <div className={`rating-star ${inlineClasses}`}>
      <div className="rating-star__container">
        {renderStars()}
      </div>
    </div>
  );
}

export default RatingStar;
