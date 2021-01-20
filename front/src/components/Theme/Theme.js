import React from 'react';
import {ThemeProvider} from 'styled-components';

import size from '../../constants/MediaQueries';

const ThemeConfig = {
  whiteColor: '#fff',
  blackColor: '#000',
  textColor: '#cfcfcf',
  hightLightColor: '#f36f36',
  orangeColor: '#f57224',
  grayColor: '#f4f4f6',
  grayColor2: '#9e9e9e',
  redColor: '#ff330c',
  
  fontSize: '16px',
  lineHeight: '1.3',
  
  
  mediaQueries: {
    minMobileSmall : `(min-width: ${size.mobileS})`,
    minMobileMedium : `(min-width: ${size.mobileM})`,
    minMobileLarge : `(min-width: ${size.mobileL})`,
    minTablet: `(min-width: ${size.tablet})`,
    minLaptopSmall : `(min-width: ${size.laptop})`,
    minLaptopMedium : `(min-width: ${size.laptopM})`,
    minLaptopLarge : `(min-width: ${size.laptopL})`,
    minDesktop : `(min-width: ${size.desktop})`,
    maxMoble: `(max-width: ${size.tablet-1})`,
    maxTablet: `(max-width: ${size.laptop-1})`,
  }
}

const Theme = ({children}) => {
  return (
    <ThemeProvider theme={ThemeConfig}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;
