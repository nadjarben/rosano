import styled from 'styled-components'
import ListItem from '@material-ui/core/ListItem';

export const Wrapper = styled.div`
  font-family: 'Bellefair', serif;
  text-transform: uppercase;
  font-size: 22px;
  background-color: rgb(25, 25, 25);
  font-weight: bold;
`

export const DrawerTitle = styled.h2`
    font-weight: bold;
    text-transform: uppercase;
    justify-content: center !important;
    text-align: center !important;
    padding-top: 5.5vh;
    padding-bottom: 5vh;
`

export const ListItemStyled = styled(ListItem)`
  justify-content: center !important;
  h4 {
    font-weight: bold;
    text-transform: capitalize;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }
`
