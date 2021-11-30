import { Button, CardContent, Container, Divider, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';

const About = () => {
    return (
        <Container>
            <CardContent sm={12} sx={{ flex: '1 0 auto' }}>
        <Box sm={12} >
          <Typography sm={12} component="div" variant="h2" sx={{marginBottom:"20px"}}>
          Hi ! <br /> I’m Jahed Ahmed <br /> Ripon.
          </Typography> <Divider ></Divider>
          <Typography variant="p" color="text.secondary" component="div" sx={{marginTop:"20px", marginBottom:'20px'}}>
          A web designer/developer focused on crafting great web experiences.  Designing and Coding <br /> have been my passion   since the days I started working with computers but <br />  I found myself into web design/development since 2018. <br /> I enjoy creating beautifully designed, intuitive and functional websites.

          For over past 2 years, <br /> I have worked for some of the best digital  agencies and wonderful clients to create some award <br />  winning works. And, I can make this  happen for your business as well.
          </Typography>
          <Link href='https://www.linkedin.com/in/jahedripon9/' target="_blank"><Button><LinkedInIcon /></Button></Link> 
          <Link href='https://github.com/jahedripon9' target="_blank"><Button><GitHubIcon /></Button></Link> <br />
          <Link  href="https://drive.google.com/file/d/1rkYh3Za5T6OWjIrWwKqMBEjc22sRJNlO/view?usp=sharing" target="_blank"><Button variant="contained" size="large" sx={{p:'10px'}}>CV Download</Button></Link>
          </Box>
        </CardContent>
        </Container>
    );
};

export default About;