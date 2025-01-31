import React from 'react'
import {AppBar,Typography,Toolbar, Button,Box,Tabs,Tab} from  '@mui/material';
import {useState} from  "react";
import {Link} from  'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { authActions } from '../store';
const Header = () => {
    const dispatch=useDispatch();
const isLoggedIn = useSelector((state) => state.isLoggedIn);
const [value, setValue] = useState();
  return (
    <AppBar 
        position='sticky'
        sx={{
        background:
        "linear-gradient(90deg, rgba(120,113,233,1) 0%, rgba(99,75,234,1) 35%, rgba(0,212,255,1) 100%)",
        }}>
        <Toolbar>
            <Typography variant='h4'>
                BlogApp
            </Typography>
            {isLoggedIn &&(<Box display='flex' marginLeft={'auto'} marginRight={'auto'}>
                <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={Link} to="/blogs" label='All Blogs'/>
                    <Tab LinkComponent={Link} to="/myBlogs" label='My Blogs'/>
                    <Tab LinkComponent={Link} to="/blogs/add" label='Add Blog'/>

                </Tabs>

            </Box>)} 
            <Box display='flex' marginLeft='auto'>
                {!isLoggedIn && (<> {" "}<Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,borderRadius:10}} color='secondary'>Login</Button>
                <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,borderRadius:10}} color='secondary'>Signup</Button></>)}
                {isLoggedIn && (<Button onClick={()=>dispatch(authActions.logout())} LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,borderRadius:10}} color='secondary'>Logout</Button>)}

            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header