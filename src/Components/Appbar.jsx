import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import useDebounce from '../Hooks/useDebounce';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../Redux/Actions';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));




export default function Appbar({refresh,setRefresh}) {
    const [inputValue,setInputValue] = React.useState('')
    const dispatch = useDispatch()


    function handleSearch(e){
    if(e.target.value){
        setInputValue(e.target.value)
    }
    else{
        setRefresh(!refresh)
    }
    }
    const inputWaitingValue = useDebounce(inputValue,1000)
React.useEffect(() => {
    if(inputWaitingValue){
        dispatch({type:ACTIONS.SEARCH, payload:inputWaitingValue})
    }
},[inputWaitingValue])
  return (
      <AppBar position="static" color='inherit' className='px-[80px]'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="info"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color='info'
            sx={{ display: { xs: 'none', sm: 'block', } }}
          >
            Products
          </Typography>
          <Search color='info'>
            <SearchIconWrapper>
              <SearchIcon color='info'/>
            </SearchIconWrapper>
            <StyledInputBase
            onChange={handleSearch}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{color:'blue'}}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button variant='outlined' color='info'>Saved Products</Button>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
