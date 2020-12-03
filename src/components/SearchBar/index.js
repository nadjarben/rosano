import React from 'react'
import { searchBarResult, resetSearchBar } from '../../store/actions/app'
import { useDispatch, useSelector } from 'react-redux'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import ClearIcon from '@material-ui/icons/Clear'
import InputBase from '@material-ui/core/InputBase'

const SearchBar = () => {
  const searchBar = useSelector((state) => state.app.searchBar)
  const toggleSearchBar = useSelector((state) => state.app.toggleSearchBar)
  const [value, setValue] = React.useState({
    searchTyped: searchBar,
    display: toggleSearchBar,
  })

  const handleReset = () => {
    setValue({ display: false, searchTyped: '' })
    dispatch(resetSearchBar())
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      marginTop: '1vh',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: value.display ? '100%' : '29%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '25ch',
        },
      },
    },
  }))

  const classes = useStyles()
  const dispatch = useDispatch()
  const lang = useSelector((state) => state.app.language)

  React.useEffect(() => {
    dispatch(searchBarResult(value.searchTyped))
  }, [value])

  return (
    <div style={{display: 'flex'}}>
      <div
        className={classes.search}
        onClick={() => setValue({ ...value, display: true })}
      >
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <div style={{ display: 'flex' }}>
          <InputBase
            autoComplet="off"
            value={value.searchTyped}
            dir={lang === 'he' ? 'rtl' : 'ltr'}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={(event) =>
              setValue({ ...value, searchTyped: event.target.value })
            }
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </div>
      {value.display && (
      <ClearIcon
            style={{position: 'absolute', top: '8px', right: 0}}
              onClick={handleReset}
            />
            )}

    </div>
  )
}

export default SearchBar
