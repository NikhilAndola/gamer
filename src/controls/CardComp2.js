import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card_image from '../assets/images/card_image.jpg'

export default function CardComp2() {
  return (
    // <Card sx={{ maxWidth: auto, backgroundColor:'#E6E6E6' }}>
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Event name
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Upgrade your network, now to play and stream the game better
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 130, marginTop:1 }}
        image={card_image}
        title="green iguana"
      />
      <CardActions sx={{display: 'flex', flexDirection:'column', alignItems: 'start'}}>
        <Typography align='left'>Ultraboost speed</Typography>
        <Button variant='outlined' color="neutral" fullWidth sx={{background: '#FEFEFE', textTransform:'capitalize'}} size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
}
