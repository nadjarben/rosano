import styled from 'styled-components'

export const Wrapper = styled.div`
  font-family: "Arimo", sans-serif;

  div {
    background-color: #eeeeee;
    color: black;
  }

  img {
    height: 130px;
    display: block;
    margin-left: auto;
    margin-right: auto;
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
}`
