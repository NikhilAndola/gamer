import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card_image from '../assets/images/card_image.jpg'

export default function CardComp() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'#E6E6E6' }}>
      <CardMedia
        sx={{ height: 200, marginTop:2 }}
        image={card_image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Event name
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent:'space-between'}}>
        <Typography sx={{textDecoration:'underline'}}>Live since 00:30:45</Typography>
        <Button variant='contained' sx={{background: '#838383', textTransform:'capitalize'}} size="small">Join Now</Button>
      </CardActions>
    </Card>
  );
}
