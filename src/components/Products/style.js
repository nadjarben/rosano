import styled from "styled-components";

export const Wrapper = styled.div`
 h1 {
    background-color: rgb(25, 25, 25);
    color: white;
    padding: 15px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Bellefair', serif;
    font-size: 18px;
    letter-spacing: 0.02857em;
    font-weight: bold;
    text-align: center;
    width: 100%;
  }
  .modal-create {
    position: absolute;
    right: 2rem;
    margin-top: 2px
  }
  .search-bar {
    position: absolute;
    left: 1rem;
    margin-top: 1rem;
  }
  .slick-list {
    margin-top: -2vh;
  }
  .slick-arrow {
    display: none !important;
  }
`;
