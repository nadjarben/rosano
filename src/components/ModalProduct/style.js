import styled from "styled-components";
import bar from "../../assets/bar2.jpg";

export const Background = styled.div`
  /* background-image: url(${bar}) !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; */
  background-image: url(${props => props.bg}) !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: black;
  /* font-weight: bold; */
  font-size: 20px;

  .Product__option {
    font-family: 'Bellefair', serif;
    text-align: center;
  }
  .product-info {
    font-family: 'Bellefair', serif;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
  }
  .product-price {
    font-family: 'Bellefair', serif;
    font-weight: bold;
    font-size: 20px;
    text-align: left !important;
    justify-content: left !important;
    position: absolute;
    left: 2rem;
  }
  .add-btn {
    border-color: black;
    font-size: 15px;
    font-weight: bold;
  }
`;

export const InputStyled = styled.input`
font-family: 'Bellefair', serif;
  font-size: 16px;
  text-align: center !important;
`;
export const ImageStyled = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 230px;
`;
