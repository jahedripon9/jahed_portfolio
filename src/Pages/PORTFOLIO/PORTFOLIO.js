import { Container, Typography } from '@mui/material';
import React from 'react';
import ProjectList from '../ProjectList/ProjectList';

const PORTFOLIO = () => {
    return (
        <Container fixed>
             <Typography
                    sx={{ display: 'inline' }}
                    component="div"
                    variant="h3"
                    color="text.primary"
                  >
                    PORTFOLIO
                  </Typography> <hr />
             <Typography
                    sx={{ display: 'inline' }}
                    component="p"
                    variant="h5"
                    color="text.primary"
                  >
                    Now, I’m working on a professional, visually sophisticated and technologically proficient, responsive and multi-functional wordpress theme Elonissa. If you are interested to work with me, click below button and contact with me right now, so we can talk about your project.
                  </Typography>
                  <ProjectList></ProjectList>
                  </Container>
    );
};

export default PORTFOLIO;