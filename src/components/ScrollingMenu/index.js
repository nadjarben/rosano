import React, { Component } from 'react';
import ScrollMenu  from 'react-horizontal-scrolling-menu';
import { Wrapper } from "./style";
 
// list of items
const list = [
  { name: 'promos' },
  { name: 'vodka' },
  { name: 'whisky' },
  { name: 'rhum' },
  { name: 'arak' },
  { name: 'beer' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' },
  { name: 'item10' },
  { name: 'item11' }
];
 
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
 
    return <div className="menu-item" key={name}><MenuItem text={name} selected={selected} /></div>;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = 'promos';
 
class ScrollingMenu extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <Wrapper>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </Wrapper>
    );
  }
}


export default ScrollingMenu
 