import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/system';


const theme = createTheme({
    palette: {
        tabIndecat: {
            main: '#2B817B',
        },
      
    }});
function TabPanel(props) {
const {children, value, index, ...other } = props;

return (
<div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
'aria-controls': `simple-tabpanel-${index}`,
};
}

export const DashHome = () => {
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
<>

<Typography variant='h5'  sx={{fontFamily: 'Outfit', fontSize: '20px', color: '#1A1b24',  lineHeight: '30px', fontWeight: '500'}}>
    Dashboard
</Typography>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} 
                  aria-label="basic tabs example" 
                  >
                      <Tab disableRipple={true} label="Manager" {...a11yProps(0)} sx={{ marginBottom: '-20px', fontFamily: 'Outfit', fontSize: '14px', 
                      color: '#1A1b24', lineHeight: '30px', fontWeight: '600' }} />
                      <Tab disableRipple={true} label="Staff" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Manager
      </TabPanel>
      <TabPanel value={value} index={1}>
        Staff
      </TabPanel>
      
    </Box>

</>
  )


}
