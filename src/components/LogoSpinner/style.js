import styled from "styled-components";

export const Wrapper = styled.div``;

export const LogoStyled = styled.img`
  width: 400px;
  position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: rotation 2s infinite linear;
    @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`;
