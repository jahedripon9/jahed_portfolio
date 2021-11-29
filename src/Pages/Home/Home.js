import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button, Divider, Link } from '@mui/material';
import Biography from '../Biography/Biography';
import PORTFOLIO from '../PORTFOLIO/PORTFOLIO';
import CONTACT from '../CONTACT/CONTACT';

const Home = () => {
  

  return (
    <>
    <Card sx={{ display: 'flex', mx:'40px', width:'full'  }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ width: 350}}
        image="https://i.ibb.co/z5zRL93/IMG-0765.jpg"
        alt="Live from space album cover"
      />
       </Box>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h2" sx={{marginBottom:"20px"}}>
          Hi ! <br /> I’m Jahed Ahmed <br /> Ripon.
          </Typography> <Divider ></Divider>
          <Typography variant="p" color="text.secondary" component="div" sx={{marginTop:"20px"}}>
          A Front End Developer, or Front End Web Developer, <br /> is responsible for using their knowledge of <br /> programming languages to code user-side applications, <br /> including visual elements like menu bars, clickable buttons, <br /> and the overall layout of websites or web applications.
          </Typography>
          <Link  href="https://drive.google.com/file/d/1rkYh3Za5T6OWjIrWwKqMBEjc22sRJNlO/view?usp=sharing" target="_blank"><Button variant="contained" size="large" sx={{p:'10px'}}>CV Download</Button></Link>
        </CardContent>
    </Card>
    <Biography></Biography>
    <PORTFOLIO></PORTFOLIO>
    <CONTACT></CONTACT>
    </>
  );
};

export default Home;