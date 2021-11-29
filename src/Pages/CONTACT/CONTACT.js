import { Container, Typography } from '@mui/material';
import React from 'react';
import ContactForm from './ContactForm';

const CONTACT = () => {
    return (
        <Container fixed>
        <Typography
               sx={{ display: 'inline' }}
               component="div"
               variant="h3"
               color="text.primary"
             >
               CONTACT
             </Typography> <hr />
             <ContactForm></ContactForm>
        </Container>
    );
};

export default CONTACT;