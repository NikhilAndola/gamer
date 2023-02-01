import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import gamebg from '../assets/images/gamebg.jpg';

export default function About() {
  return (
    <Box pt={'30px'} sx={{display: 'grid', gridTemplateRows: '1fr auto 1fr', height: '91vh'}}>
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

        <Box sx={{padding:'0px 100px 0px 100px', position:'relative', width: '100%',display: 'flex', 
        justifyContent:'center', alignItems:'center', flexDirection:'column',
        }}>
            <Box sx={{
                width:'100%',
                height:"500px",
                backgroundImage: `url(${gamebg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: 'flex', gap: 2,
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}
              pb={3}
              >
                  <Button color="neutral" variant='contained' sx={{height: '36px', width:"150px", textTransform:"capitalize"}}>Test Network</Button>
                  <Button color="neutral" variant='contained' sx={{height: '36px', width:"150px", textTransform:"capitalize"}}>Join Game</Button>
            </Box>
            {/* <img src={gamebg} alt="background" style={{height:"70vh", width:'100%', zIndex:-1}}/> */}
        </Box>

        <Box sx={{height:"auto", backgroundColor:"gray", display: 'flex', justifyContent:'space-between', alignItems:"center", zIndex:2}}>
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
