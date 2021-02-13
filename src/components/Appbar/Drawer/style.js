import styled from 'styled-components'
import ListItem from '@material-ui/core/ListItem';

export const Wrapper = styled.div`
  font-family: 'Bellefair', serif;
  text-transform: uppercase;
  font-size: 18px;
  background-color: rgb(25, 25, 25);
  font-weight: bold;
`

export const DrawerTitle = styled.h2`
    font-weight: bold;
    text-transform: uppercase;
    justify-content: center !important;
    text-align: center !important;
    padding-top: 3.5vh;
    padding-bottom: 3vh;
`

export const ListItemStyled = styled(ListItem)`
  justify-content: center !important;
  h4 {
    font-weight: bold;
    text-transform: capitalize;
    padding-top: 0.5rem;
  }
`
