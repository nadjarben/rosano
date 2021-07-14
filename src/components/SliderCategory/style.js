import styled from "styled-components";

export const Wrapper = styled.div`
 h1 {
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
    margin-top: 0.5rem;
  }
  .info-bar {
    display: flex;
    background-color: rgb(25, 25, 25);
  }
  .search-bar {
    position: absolute;
    left: 1rem;
    margin-top: 1.5rem;
  }
  .caroussel {
    @media (min-width: 600px) {
    display: none;
  }
  }
  .slick-list {
    margin-top: -2vh;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-track {
    height: unset !important;
  }
`;
