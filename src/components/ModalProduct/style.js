import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog'

export const DialogStyled = styled(Dialog)`
 .MuiPaper-root {
  background-image: url(${props => props.bg}) !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

}
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
    font-size: 22px;
    align-items: center;
    align-content: center;
    align-self: center;
    height: 100%;
    margin-left: 1rem;
    margin-top: 1rem;
  }
  .product-fake-price {
    text-decoration: line-through;
    font-size: 17px;
    padding-right: 1rem;
  }
`

export const Background = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* background-image: url(${props => props.bg}) !important; */
  color: black;
  font-weight: bold;
  font-size: 20px;
  min-height: 100%;
  @media (min-width: 600px) {
    min-height: unset;
  }

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
    font-size: 22px;
    align-items: center;
    align-content: center;
    align-self: center;
    justify-content: left;
    height: 100%;
  }
  .product-fake-price {
    text-decoration: line-through;
    font-size: 17px;
    padding-right: 1rem;
  }
  .add-btn {
    border-color: black;
    justify-content: right;
    font-size: 20px !important;
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

