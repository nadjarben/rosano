import styled from "styled-components";
import bar from "../../assets/bar2.jpg";

const url = "https://st.depositphotos.com/3008028/3749/i/950/depositphotos_37493071-stock-photo-abstract-grey-background.jpg"

export const Background = styled.div`
  /* background-image: url(${bar}) !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; */
  background-image: url(${url}) !important;
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
    text-align: center;
    font-size: 14px;
  }
  .product-price {
    font-family: 'Bellefair', serif;
    font-weight: bold;
    text-align: center;
    font-size: 16px;
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
