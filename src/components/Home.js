import React from 'react'
import ResponsiveAppBar from '../controls/Appbar'
import { CssBaseline } from '@mui/material'
// import { Link, Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{overflowY:"hiddden", width: '100vw', height: '100vh', overflowY: 'auto'}}>
        {/* <Box position={'absolute'} sx={{top:0, right:0,bottom:0,left:0,zIndex: '-1',color: 'red', backgroundColor:"#D9D9D9", position:"absolute"}}>
        </Box> */}
        <CssBaseline/>
        <ResponsiveAppBar />
        {/* <Outlet/> */}
    </div>
  )
}
