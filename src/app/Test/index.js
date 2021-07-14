import * as React from 'react';

import { SnapList, SnapItem } from 'react-snaplist-carousel';

const MyItem = ({ children }) => (
  <div style={{ width: '10vw', height: 200, background: '#cccccc' }}>
    {children}
  </div>
);

const Test = () => (
  <SnapList>
    <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
      <MyItem>Item 0</MyItem>
    </SnapItem>
    <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
      <MyItem>Item 1</MyItem>
    </SnapItem>
    <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
      <MyItem>Item 2</MyItem>
    </SnapItem>
    <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
      <MyItem>Item 3</MyItem>
    </SnapItem>
    <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
      <MyItem>Item 4</MyItem>
    </SnapItem>
  </SnapList>
)

export default Test