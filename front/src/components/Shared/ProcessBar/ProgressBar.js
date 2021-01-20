import React from 'react';

import './ProgressBar.scss';

const ProgressBar = (props) => {
  const {value = 0} = props;
  return (
    <div className="progressbar">
      <div className="progressbar__bar"></div>
      <div className="progressbar__bar active" style={{width: value}} ></div>
    </div>
  );
}

export default ProgressBar;
