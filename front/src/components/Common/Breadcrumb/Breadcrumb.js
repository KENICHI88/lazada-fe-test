import React from 'react';
import {Link} from 'react-router-dom';

import './Breadcrumb.scss';

const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb">
      <Link to="/" className="breadcrumb-item">Back to Category page</Link>
    </div>
  );
}

export default Breadcrumb;
