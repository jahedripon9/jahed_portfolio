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
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="APTIS" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/BritishCouncil_Logo.png" />
            </ListItemAvatar>
            <ListItemText
              primary=" Language Proficiency "
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    British Council
                  </Typography>
                  {"	English:  APTIS, Forward-thinking English testing exam passed, supported by British Council."}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      );
    }

export default Education;