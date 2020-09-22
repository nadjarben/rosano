import styled from "styled-components";
import bar from "../../assets/bar2.jpg";

export const Background = styled.div`
  background-image: url(${bar}) !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
  font-weight: bold;
  font-size: 20px;

  .Product__option {
    font-family: "Arimo", sans-serif;
    color: white;
    text-align: center;
  }
  .product-info {
    font-family: "Arimo", sans-serif;
    font-weight: bold;
    color: white;
    text-align: "center"
  }
`;

export const InputStyled = styled.input`
  font-family: "Arimo", sans-serif;
  font-size: 16px;
  text-align: center !important;
`;
export const ImageStyled = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
`;
