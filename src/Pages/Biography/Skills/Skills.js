import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
const Skills = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            
            <ListItemText
              primary="Expertise "
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    HTML5, CSS3, Bootstrap, Tailwind, Material Ui, JavaScript, React JS.
                  </Typography>
                  {/* {" Department: Computer Technology, Semester: 6th, Session: 2018-2019, Study running."} */}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            
            <ListItemText
              primary="Comfortable "
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    MongoDB, Node JS
                  </Typography>
                  {/* {" Department: Computer Technology, Semester: 6th, Session: 2018-2019, Study running."} */}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            
            <ListItemText
              primary="Familiar "
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Firebase
                  </Typography>
                  {/* {" Department: Computer Technology, Semester: 6th, Session: 2018-2019, Study running."} */}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            
            <ListItemText
              primary="Tools "
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Git, Chrome Dev Tool, VS Code 
                  </Typography>
                  {/* {" Department: Computer Technology, Semester: 6th, Session: 2018-2019, Study running."} */}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      );
    }
export default Skills;