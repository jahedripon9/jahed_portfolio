import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button, Container, Link, Typography } from '@mui/material';
function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
const Food = () => {
    return (
        <Container fulid>
            <Typography
        sm={12}
               sx={{ display: 'inline' }}
               component="div"
               variant="h3"
               color="text.primary"
             >
               Food Wagon
             </Typography> 
        <ImageList
      sx={{ width: 'full', height: 'full' }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography
        sm={12}
               sx={{ display: 'inline' }}
               component="div"
               variant="p"
               color="text.primary"
             >
               <Button variant='contained' ><Link href=' https://food-wagon-2b794.web.app/' style={{color:'white'}}target='_blank'>Live Server Link</Link></Button>
               <Button variant='contained' ><Link href=' https://github.com/jahedripon9/food_wagon_Client_Site' style={{color:'white'}}target='_blank'>Github Client Site Link</Link></Button>
               <Button variant='contained' ><Link href=' https://github.com/jahedripon9/food_wagon_server_site' style={{color:'white'}} target='_blank'>Github Server Site Link</Link></Button> <br />
               The Future of Possible
              Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.
             </Typography> 
    </Container>
  );
};

const itemData = [
    {
      img: 'https://i.ibb.co/P4QXJFD/Screenshot-2021-11-30-at-22-25-40.png',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/VHddgtS/Screenshot-2021-11-30-at-22-25-51.png',
      title: 'Burger',
    },
    {
      img: 'https://i.ibb.co/S68QscT/Screenshot-2021-11-30-at-22-25-59.png',
      title: 'Camera',
    },
    {
      img: 'https://i.ibb.co/BtTpCrn/Screenshot-2021-11-30-at-22-26-09.png',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/nb7T0WR/Screenshot-2021-11-30-at-22-26-04.png',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/xXwWZSJ/Screenshot-2021-11-30-at-22-26-44.png',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/v4sMcg5/Screenshot-2021-11-30-at-22-26-23.png',
      title: 'Hats',
      cols: 2,
    },
  ];

export default Food;