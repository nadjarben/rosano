import styled from "styled-components";

export const Wrapper = styled.div`
  div:hover {
    background-color: black;
    color: white !important;
  }

  img {
    height: 150px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  p:hover {
    color: white !important;
  }

  button {
    margin-left: auto;
    margin-right: auto;
  }

  .text-description {
    color: grey;
  }

.price-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

  .text-line-through {
    text-decoration: line-through;
    margin-right: 5px;
    color: grey;
  }
}`;
