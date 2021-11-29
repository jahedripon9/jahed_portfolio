import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import React from 'react';
import { Button, Container, Link } from '@mui/material';
import TabsList from '../TabsList/TabsList';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body3,
    padding: theme.spacing(2),
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight:'bold',
    color: theme.palette.text.secondary,
  }));

const Biography = () => {
    return (
        <Container fixed>
        <Box>
            <h1> BIOGRAPHY</h1>
            <hr />
            <p>I'm a Freelancer Front-end Developer with over 2 years of experience. I'm from Sylhet, Bangladesh. I code and create web elements for amazing people around the world. I like work with new people. New people are new experiences.</p>
            <div>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    // direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    justifyContent="center"
                    alignItems="center"
                    // spacing={2}
                    >
                    <Item>Name: Jahed Ahmed Ripon</Item> 
                    <Item>Birthday:  March 17, 1994</Item>
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    // direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    justifyContent="center"
                    alignItems="center"
                    // spacing={2}
                    >
                    <Item>Age: 27 Years</Item> 
                    <Item>Adress: Sylhet, Bangladesh</Item>
                    <Item>Phone: +880 1726 308 391</Item>
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    // direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    justifyContent="center"
                    alignItems="center"
                    // spacing={2}
                    >
                     <Item>Skype: jahed_R9</Item>
                    <Item>Email: jahedahmedripon@gmail.com</Item>
                    
                </Stack>
                
            </div>
            <div > <br /><br /><br /><br /><br />
            <Link href="https://drive.google.com/file/d/1rkYh3Za5T6OWjIrWwKqMBEjc22sRJNlO/view?usp=sharing" target="_blank"><Button variant="contained" size="large" sx={{p:'25px'}}>CV Download</Button></Link>

            <TabsList></TabsList>
            </div>
        </Box>
        </Container>
    );
};

export default Biography;