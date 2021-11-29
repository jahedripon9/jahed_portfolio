import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from '../../Home/Home';
import Biography from '../../Biography/Biography';
import PORTFOLIO from '../../PORTFOLIO/PORTFOLIO';
import Service from '../../Service/Service';
import CONTACT from '../../CONTACT/CONTACT';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'full', fontSize:"20px" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 2, borderColor: 'divider'}}
      >
        <Tab label="HOME" {...a11yProps(0)} />
        <Tab label="BIOGRAPHY" {...a11yProps(1)} />
        <Tab label="SERVICES" {...a11yProps(2)} />
        <Tab label="PORTFOLIO" {...a11yProps(3)} />
        <Tab label="NEWS & TIPS" {...a11yProps(4)} />
        <Tab label="CONTACT" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0} >
        <Home></Home>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Biography></Biography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Service></Service>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PORTFOLIO></PORTFOLIO>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
      <CONTACT></CONTACT>
      </TabPanel>
      <TabPanel value={value} index={6}>
        
      </TabPanel>
    </Box>
  );
}