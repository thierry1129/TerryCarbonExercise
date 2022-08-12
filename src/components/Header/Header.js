import React from 'react';
import {
  Header,
  HeaderName,
 } from '@carbon/react';

function MainHeader () {
  return(
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
    </Header>
  )
}

export default MainHeader;
