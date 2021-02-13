import styled, { keyframes } from 'styled-components'
import { zoomInUp } from 'react-animations'
import { MDBCollapse } from 'mdbreact'

export const Wrapper = styled.div`
font-family: 'Bellefair', serif;
  text-transform: uppercase;
  font-size: 18px;
  background-color: rgb(25, 25, 25);
  display: flex;
  align-items: center;
  align-self: center;
  align-content: center;
  width: 100%;


  .shopping-cart {
    position: absolute;
    right: 100px;
    top: 39px;
    z-index: 1000;
    cursor: pointer;
  }
  .menu-items {
    @media (min-width: 600px) {
      margin-left: 20px;
    }
  }
`

export const MDBCollapseStyled = styled(MDBCollapse)`
  text-align: center;
  @media (min-width: 600px) {
    margin-left: 100px;
  }
`

export const LanguageWrapper = styled.div`
  display: flex;
  text-align: right;
  position: absolute;
  right: 1.5rem;
`

const bounceAnimation = keyframes`${zoomInUp}`

export const BouncyDiv = styled.div`
  animation: 3s ${bounceAnimation};
`
