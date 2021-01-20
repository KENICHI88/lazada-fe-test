import React from 'react';

import HeaderContainer from '../Header/HeaderContainer';
import FooterContainer from '../Footer/FooterContainer';

const Layout = ({children, component: Component}) => {
  return (
    <>
      <HeaderContainer />
      <Component />
      {children}
      <FooterContainer />
    </>
  );
}

export default Layout;
