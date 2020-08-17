import styled from "styled-components";
import { MDBNavItem } from "mdbreact";

export const Wrapper = styled.div`
  text-align: center;
  text-transform: uppercase;
`;

export const LanguageWrapper = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
`;

export const MDBNavItemStyled = styled(MDBNavItem)`
  display: flex;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`
