import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Education = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="IBIT" src="https://i.ibb.co/xHfxq9s/image.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Islami Bank Institute of Technology "
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Diploma In Engineering
                  </Typography>
                  {" Department: Computer Technology, Semester: 6th, Session: 2018-2019, Study running."}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      );
    }

export default Education;