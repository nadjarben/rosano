import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  font-size: 18px;
  color: black;
  font-family: 'Alef', sans-serif;
  font-weight: bold;
  text-transform: uppercase;

  .menu-item {
  padding: 0 10px;
  margin: 5px 10px;
  user-select: none;
  cursor: pointer;
  border: none;
}
.menu-item-wrapper.active {
  color: white;
  padding: 14px;
  background-color: rgb(25, 25, 25);
}
.menu-item.active {
}

.scroll-menu-arrow {
  padding: 20px;
  cursor: pointer;
}
`;
