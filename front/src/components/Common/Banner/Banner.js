import React from 'react';

import './Banner.scss';

const Banner = (props) => {
  const {title = 'Banner here', subTitle = null, bannerUrl='https://laz-img-cdn.alicdn.com/tfs/TB1ICP3b3mTBuNjy1XbXXaMrVXa-3244-240.png'} = props;
  return (
    <div class="collection-product-banner banner" style={{'background-image': `url(${bannerUrl})`}} >
      <div class="title">{title}</div>
      {subTitle && (<div className="subtitle">{subTitle}</div>)}
    </div>
  );
}

export default Banner;
