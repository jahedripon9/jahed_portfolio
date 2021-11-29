import { Container, Typography } from '@mui/material';
import React from 'react';
import ProjectList from '../ProjectList/ProjectList';
const Service = () => {
    return (
    <Container fixed>
             <Typography
                    sx={{ display: 'inline' }}
                    component="div"
                    variant="h3"
                    color="text.primary"
                  >
                    SERVICES
                  </Typography> <hr />
             <Typography
                    sx={{ display: 'inline' }}
                    component="p"
                    variant="h5"
                    color="text.primary"
                  >
                    I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales. My only working rule is that I don't work through agencies, I prefer to communicate directly with clients.
                  </Typography>
                </Container>
    )
}
export default Service;