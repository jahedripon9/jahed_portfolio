import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Typography } from '@mui/material';
function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
const DJI = () => {
    return (
        <Container fulid>
            <Typography
        sm={12}
               sx={{ display: 'inline' }}
               component="div"
               variant="h3"
               color="text.primary"
             >
               DJI Official Demo 
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
               The Future of Possible
Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.
             </Typography> 
    </Container>
  );
};


const itemData = [
    {
      img: 'https://i.ibb.co/CPtbWrK/Screenshot-2021-11-30-at-22-22-10.png',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/fYJ0WP7/Screenshot-2021-11-30-at-22-22-21.png',
      title: 'Burger',
    },
    {
      img: 'https://i.ibb.co/KhWBMJY/Screenshot-2021-11-30-at-22-22-34.png',
      title: 'Camera',
    },
    {
      img: 'https://i.ibb.co/1XBZYX0/Screenshot-2021-11-30-at-22-23-01.png',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/SyyY93f/Screenshot-2021-11-30-at-22-22-48.png',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/3vn3wNV/Screenshot-2021-11-30-at-22-23-20.png',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/WKszdRK/Screenshot-2021-11-30-at-22-23-09.png',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/ZhhNLBM/Screenshot-2021-11-30-at-22-23-44.png',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/XZ9GcjD/Screenshot-2021-11-30-at-22-24-03.png',
      title: 'Hats',
      cols: 2,
    },
  ];

export default DJI;