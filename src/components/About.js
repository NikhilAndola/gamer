import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// import bgColor from '../assets/images/bgColor.jpg';
import bgColor from '../assets/images/gamebg.jpg';

export default function About() {
  return (
    <Box mt={'30px'} width="100%" sx={{ height: 'calc(100vh - 70px)', display: 'flex', flexDirection:'column'}}>
      <Box  mx={'50px'} sx={{display: 'flex', justifyContent:'space-between' }}>
        <Typography sx={{width:"60%"}} variant='h6'>Brought to you by &#60;telco company&#62; </Typography>
        <Box sx={{display: 'flex', gap: 2}}>
            <Box sx={{display: 'flex', justifyContent:'space-between'}}>
              <Typography color="#757575">Network requirements</Typography>
              <InfoOutlinedIcon color="action"/>
            </Box>
          <CloseOutlinedIcon />
        </Box>
      </Box>
      <Box mt={'77px'} mx="100px" sx={{position: "relative", display: 'flex', alignItems:'end',justifyContent:'center', height: "100%"}}>
          <img src={bgColor} alt="background" style={{position:"absolute", top: 0, height:"510px", width:'100%'}}/>
          <Box sx={{display: 'flex', gap: 2}} pb={2}>
            <Button color="neutral" variant='contained' sx={{height: '36px', width:"150px", textTransform:"capitalize"}}>Join Game</Button>
            <Button color="neutral" variant='contained' sx={{height: '36px', width:"150px", textTransform:"capitalize"}}>Test Network</Button>
          </Box>
      </Box>
      <Box sx={{height:"120px", backgroundColor:"gray", display: 'flex', justifyContent:'space-between', alignItems:"center", zIndex:2}}>
            <Box ml="200px">
              <Typography variant='h6'>
              Buy a Telifonica subscription for a smooth and uninterrupted network Additionally 
              </Typography>
              <Typography variant='subtitle2'>
              get a free game pass on your first subscription
              </Typography>
            </Box>
            <Box mr={"200px"}>
              <Button color="neutral" variant='contained' sx={{textTransform:'capitalize'}}>Explore</Button>
            </Box>
      </Box>
    </Box>
  )
}
