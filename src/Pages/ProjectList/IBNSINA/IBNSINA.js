import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button, Container, Link, Typography } from '@mui/material';
import DJI from '../DJI/DJI';
import Food from '../Food/Food';
function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
const IBNSINA = () => {
    return (
        <Container fulid>
            <Typography
        sm={12}
               sx={{ display: 'inline' }}
               component="div"
               variant="h3"
               color="text.primary"
             >
               Ibn Sina Hospital Sylhet Limited
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
               sx={{ display: 'inline', marginBottom:'20px' }}
               component="div"
               variant="p"
               color="text.primary"
             >
               <Button variant='contained' ><Link href=' https://ibn-sina-hospital-limited.web.app/' style={{color:'white'}}target='_blank'>Live Server Link</Link></Button>
               <Button variant='contained' ><Link href=' https://github.com/jahedripon9/Ibn-Sina-Hospital-Ltd' style={{color:'white'}} target='_blank'>Github Code Link</Link></Button> <br />
             </Typography> 
    <Typography
        sm={12}
               sx={{ display: 'inline', marginBottom:'20px' }}
               component="div"
               variant="p"
               color="text.primary"
             >
               The Ibn Sina Hospital Sylhet Ltd. (A Concern of The Ibn Sina Trust) was established in 10th April 2009, Keeping in Pace with continuous development of medical technologies, Ibn Sina hospital has been rendering its services in the field of Medicine (Internal, Neuro, Nephro, Gastro-liver, Cardiac, Onco, Endocrine etc.), Surgery, Gynae, Neuro surgery, Spine Surgery, colorectal Surgery, Orthopedics Surgery, urology etc. It provides tertiary level of medical care in those fields. Besides it has opened a new horizon in Laparoscopic Abdominal and colorectal Surgery. With affordable cost it gives services to the ever increasing number of kidney patients through its dialysis unit equipped with most modern equipment and backed by a dedicated medical team. IBN SINA Hospital is proud of its ICU unit for rendering round the clock intensive care services with the help of most modern and sophisticated equipments supported by a very dedicated, skilled, and efficient team of doctors, nurses and other staffs. Ibn Sina Hospital has 4 well equipped operation theater where C-Arm, Operating Microscope available to make operation more effective.
             </Typography> 
             <div sx={{marginTop:'20px'}}>
             <DJI></DJI>
             </div>
             <div sx={{marginY:'20px'}}>
             <Food></Food>
             </div>
    </Container>
  );
};

const itemData = [
    {
      img: 'https://i.ibb.co/5nnbdnZ/Screenshot-2021-11-30-at-22-25-13.png',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/pnys7qc/Screenshot-2021-11-30-at-22-24-25.png',
      title: 'Burger',
    },
    {
      img: 'https://i.ibb.co/c60MTwN/Screenshot-2021-11-30-at-22-24-35.png',
      title: 'Camera',
    },
    {
      img: 'https://i.ibb.co/DY7QmNQ/Screenshot-2021-11-30-at-22-24-42.png',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/M1sNX2V/Screenshot-2021-11-30-at-22-25-03.png',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/5nnbdnZ/Screenshot-2021-11-30-at-22-25-13.png',
      title: 'Hats',
      cols: 2,
    },
  ];

export default IBNSINA;