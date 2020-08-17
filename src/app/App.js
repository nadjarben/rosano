import React from 'react';
import Navbar from "../components/Navbar"
import ScrollingMenu from "../components/ScrollingMenu";
import { Wrapper } from "./style";
function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
      <ScrollingMenu />
      </Wrapper>
    </div>
  );
}

export default App;
