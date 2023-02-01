import React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import gamebg from '../assets/images/gamebg.jpg';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import CardComp2 from '../controls/CardComp2';

export default function Game() {
  return (
    // <Box mt={'30px'} width="100%" sx={{ height: 'calc(100vh - 70px)', display: 'flex', flexDirection:'column'}}>
    //   <Box  mx={'50px'} sx={{display: 'flex', justifyContent:'space-between' }}>
    //     <Typography sx={{width:"60%"}} variant='h6'>Brought to you by &#60;telco company&#62; </Typography>
    //     <Box sx={{display: 'flex', gap: 2}}>
    //         <Box sx={{display: 'flex', justifyContent:'space-between'}}>
    //           <Typography color="#757575">Network requirements</Typography>
    //           <InfoOutlinedIcon color="action"/>
    //         </Box>
    //       <CloseOutlinedIcon />
    //     </Box>
    //   </Box>
    //   <Box mt={'77px'} mx="100px" sx={{position: "relative", display: 'flex', alignItems:'end',justifyContent:'center', height: "100%"}}>
    //       <img src={gamebg} alt="background" style={{position:"absolute", top: 0, height:"510px", width:'100%'}}/>

    //       <Box sx={{background:"red", width: "100%", height: "100%", zIndex: 3}}>
    //             sd
    //       </Box>
    //       {/* <Box sx={{display: 'flex', gap: 2}} pb={2}>
    //         <Button color="neutral" variant='contained' sx={{height: '36px', width:"150px", textTransform:"capitalize"}}>Join Game</Button>
    //         <Button color="neutral" variant='contained' sx={{height: '36px', width:"150px", textTransform:"capitalize"}}>Test Network</Button>
    //       </Box> */}
    //   </Box>
    //   <Box sx={{height:"120px", backgroundColor:"gray", display: 'flex', justifyContent:'space-between', alignItems:"center", zIndex:2}}>
    //         <Box ml="200px">
    //           <Typography variant='h6'>
    //           Buy a Telifonica subscription for a smooth and uninterrupted network Additionally 
    //           </Typography>
    //           <Typography variant='subtitle2'>
    //           get a free game pass on your first subscription
    //           </Typography>
    //         </Box>
    //         <Box mr={"200px"}>
    //           <Button color="neutral" variant='contained' sx={{textTransform:'capitalize'}}>Explore</Button>
    //         </Box>
    //   </Box>
    // </Box>

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
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                alignItems:"center",
                gap: 4,
                backgroundImage: `url(${gamebg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <Box sx={{
                    width: '65%',
                    height: '80%',
                    backgroundColor: '#434343',
                    display: 'flex',
                    justifyContent:'space-between'

                }}
                >
                    <Box sx={{width: '58%', padding:'22px 0px 0px 42px'}}>
                        <Typography variant='h6' color="white">Network Check</Typography>
                        <Box pt={2}>
                            <Box sx={{display: 'flex', gap: 2}}>
                                <CheckIcon color="success"/>
                                <Typography color="green" variant='subtitle2'>Connection Check</Typography>
                            </Box>
                            <Box sx={{display: 'flex', width:"100%"}}>
                                <Box sx={{display: 'flex', gap: 2, width:"100%"}}>
                                    <CloseIcon sx={{color: '#ff4336'}}/>
                                    <Typography color="#ff4336" variant='subtitle2'>Network Strength</Typography>
                                </Box>
                                <Typography color="#A5A5A5" variant='body2' sx={{textDecoration: 'underline'}}>Upgrade</Typography>
                            </Box>
                            <Box sx={{display: 'flex', gap: 2}}>
                                <RefreshIcon sx={{color: '#ffffff'}}/>
                                <Typography color="#ffffff" variant='subtitle2'>Authentication !!!</Typography>
                            </Box>
                            <Box sx={{display: 'flex', gap: 2}}>
                                <RefreshIcon sx={{color: '#ffffff'}}/>
                                <Typography color="#ffffff" variant='subtitle2'>Device : Checked (1080 UHD)</Typography>
                            </Box>
                            <Box sx={{display: 'flex', width:"100%"}}>
                                <Box sx={{display: 'flex', gap: 2, width:"100%"}}>
                                    <CloseIcon sx={{color: '#ffffff'}}/>
                                    <Typography color="#ffffff" variant='subtitle2'>Connection type : 5G FWA Tele.</Typography>
                                </Box>
                                <Typography color="#A5A5A5" variant='body2' sx={{textDecoration: 'underline'}}>Upgrade</Typography>
                            </Box>
                            <Box sx={{display: 'flex', gap: 2}}>
                                <RefreshIcon sx={{color: '#ffffff'}}/>
                                <Typography color="#ffffff" variant='subtitle2'>Authentication !!!</Typography>
                            </Box>
                            <Box sx={{display: 'flex', gap: 2}}>
                                <RefreshIcon sx={{color: '#ffffff'}}/>
                                <Typography color="#ffffff" variant='subtitle2'>Slice - Enabled</Typography>
                            </Box>
                            <Box sx={{display: 'flex', width:"100%"}}>
                                <Box sx={{display: 'flex', gap: 2, width:"100%"}}>
                                    <RefreshIcon sx={{color: '#ffffff'}}/>
                                    <Typography color="#ffffff" variant='subtitle2'>Security : Enabled</Typography>
                                </Box>
                                <Typography color="#A5A5A5" variant='body2' sx={{textDecoration: 'underline'}}>Upgrade</Typography>
                            </Box>
                            <Box sx={{display: 'flex', gap: 2}}>
                                <RefreshIcon sx={{color: '#ffffff'}}/>
                                <Typography color="#ffffff" variant='subtitle2'>Plan type : Infinite</Typography>
                            </Box>
                            <Box sx={{display: 'flex', gap: 2}}>
                                <RefreshIcon sx={{color: '#ffffff'}}/>
                                <Typography color="#ffffff" variant='subtitle2'>Record Session : Enabled</Typography>
                            </Box>
                            <Box sx={{display: 'flex', width:"100%"}}>
                                <Box sx={{display: 'flex', gap: 2, width:"100%"}}>
                                    <RefreshIcon sx={{color: '#ffffff'}}/>
                                    <Typography color="#ffffff" variant='subtitle2'>Live stream : Enabled</Typography>
                                </Box>
                                <Typography color="#A5A5A5" variant='body2' sx={{textDecoration: 'underline'}}>Upgrade</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', alignItems:'center', width:'1%', justifyContent: 'center' }}>
                        <Box sx={{width: '0.5px', height: '90%', backgroundColor: 'white'}} />
                    </Box>
                    <Box sx={{width: '40%', height:"300px", display: 'flex', justifyContent:'center'}} pt={3}>
                            <Box pt={2} sx={{width: '80%'}}>
                                <CardComp2/>
                            </Box>
                    </Box>

                </Box>
                <Box sx={{
                      display: 'flex', gap: 2,
                      justifyContent: 'center'
                    //   alignItems: 'flex-end',
                }}
                >
                    <Button color="neutral" variant='contained' sx={{height: '36px', width:"150px", textTransform:"capitalize"}}>Test Network</Button>
                    <Button color="neutral" variant='contained' sx={{height: '36px', width:"150px", textTransform:"capitalize"}}>Join Game</Button>
                </Box>
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
