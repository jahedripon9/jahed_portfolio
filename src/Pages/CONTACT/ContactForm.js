import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
const ContactForm = () => {
return (
    <Box sm={12}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch'  },
      }}
      noValidate
      autoComplete="off"
    >
      <div sm={12}>
        <TextField
        sm={12}
          required
          id="outlined-required"
          type='name'
          label="Name"
        /> <br />
        <TextField
          required
          type='email'
          label="Eamil"
        /> <br />
        <TextField
          required
          type="text"
          label="Phone"
        /> <br />
        <TextField
          required
          type="text"
          label="Message"
        /> <br />
        <Button variant="contained" style={{backgroundColor: 'yellow', color:'black'}} size="large" sx={{px:'25px'}}>Submit</Button>
        
      </div>
    </Box>
  );
}

export default ContactForm;