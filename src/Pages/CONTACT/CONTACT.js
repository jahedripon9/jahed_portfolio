import { Container, Typography } from '@mui/material';
import React from 'react';
import ContactForm from './ContactForm';

const CONTACT = () => {
    return (
        <Container fixed>
        <Typography
        sm={12}
               sx={{ display: 'inline' }}
               component="div"
               variant="h3"
               color="text.primary"
             >
               CONTACT
             </Typography> <hr />
             <ContactForm></ContactForm> <br /><br /><br />
             <Typography
        sm={12}
               sx={{ display: 'inline' }}
               component="div"
               variant="h6"
               color="text.primary"
             >
               Address
             </Typography> <hr />
             <Typography
        sm={12}
               sx={{ display: 'inline' }}
               component="div"
               variant="h5"
               color="text.primary"
             >
               13, Dhansiri, Shahi Eidga, Sylhet, <br /> Bangladesh. <hr />
             </Typography>  <br />
             <Typography
        sm={12}
               sx={{ display: 'inline' }}
               component="div"
               variant="p"
               color="text.primary"
             >
               Phone
             </Typography>  <br /> <br />
             <Typography
        sm={12}
               sx={{ display: 'inline' }}
               component="div"
               variant="h6"
               color="text.primary"
             >
               +880 1726 308 391
             </Typography> <br /> <br />
             <Typography
        sm={12}
               sx={{ display: 'inline' }}
               component="div"
               variant="p"
               color="text.primary"
             >
               Email
             </Typography>  <br /> <br />
             <Typography
        sm={12}
               sx={{ display: 'inline' }}
               component="div"
               variant="h5"
               color="text.primary"
             >
               jahedahmedripon@gmail.com
             </Typography>  <br /><br />
        </Container>
    );
};

export default CONTACT;