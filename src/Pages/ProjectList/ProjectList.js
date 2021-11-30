import { Button, buttonBaseClasses, Container, linkClasses } from '@mui/material';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';

const ProjectList = () => {
    return (
        <Container fulid>
        <ImageList sx={{ width: 'full', height: 'full' }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.author}</span>}
                position="below"
                
              />
                      <Link to='/ibnsina'><Button variant='contained'>Details</Button></Link>

            </ImageListItem>
            
          ))}
        </ImageList>
        
        </Container>
      );
    }
    
    const itemData = [
      {
        img: 'https://i.ibb.co/qFnMFmt/image.png',
        title: ' Ibn Sina Hospital Limited',
        author: '@jahedripon9',
        link: '/ibnsina',
      },
      {
        img: 'https://i.ibb.co/5s6m61j/image.png',
        title: ' DJI Official Demo Site',
        author: '@jahedripon9',
        link: '/ibnsina'
      },
      {
        img: 'https://i.ibb.co/txf08F5/image.png',
        title: 'Food Wagon',
        author: '@jahedripon9',
        link: '/ibnsina'
      },
    ];

export default ProjectList;