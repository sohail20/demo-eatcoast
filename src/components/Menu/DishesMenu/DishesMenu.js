import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/system';
import { Button, ThemeProvider } from '@mui/material';
 import { ActiveDishes } from '../DishesMenu/ActiveDishes';
import { NotActiveDishes } from '../DishesMenu/NotActiveDishes';
import { DishesSteppet } from '../DishesMenu/DishesSteppet';
import ActiveDishesList from '../DishesMenu/ActiveDishesList'
import DishesSubHeader from './DishesSubHeader';
import AddCuisine from '../AddCuisine';
import CustomCalendar from '../../Calendar/Calendar';
import CustomInput from '../../Inputs/CustomInput';
import SimpleDataTable from '../../DataTable/SimpleDataTable'
import DishesUnderReview from './DishesUnderReview';
import DishesDraft from './DishesDraft';


const theme = createTheme({
  palette: {
    tabIndecat: {
      main: '#2B817B',
    },

  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

export const DishesMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // to show active and not actparamsive dishess
  const [activeDishes, setActiveDishes] = React.useState(!true)

  // to show multiStepper
  // const [stepper, setStepper] = React.useState(false)
 const [stepper, setStepper] = React.useState(false)
 const [stepper1, setStepper1] = React.useState(false)

  const handleDishesAdd=()=>{
    setStepper(true);
      
  }  
  
  return (
    <Box sx={{ marginTop: { xs: '100px', sm: '100px', md: '0px' } }}>
          {stepper ? (
          <>
                  <DishesSteppet setStepper={setStepper} />
          </>
           ): (
               <>
                      <DishesSubHeader title={'All Dishes'} setStepper={setStepper} /> 

      {/* <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Box>
          <Typography sx={{ marginBottom: '4px', fontFamily: 'Outfit', fontSize: '20px', color: '#1A1b24', lineHeight: '30px', fontWeight: '500' }}>
            All Dishes
          </Typography>
          <Typography sx={{ fontFamily: 'Outfit', fontSize: '16px', color: ' #2B817B', lineHeight: '24px', fontWeight: '400' }}>
            Add Cuisine  +
          </Typography>
        </Box >
        <Box>
          <Button onClick={handleDishesAdd} sx={{
            textTransform: 'none',
            width: '110px',
            height: '40px',
            background: '#2B817B',
            fontWeight: '600',
            borderRadius: '4px',
            color: '#fff', fontFamily: 'Outfit', fontSize: '14px',
            '&:hover': { color: '#fff', background: '#2B817B' }
          }}>
            +  Add Dishes
          </Button>
        </Box>
      </Box> */}

      <Box sx={{ width: '100%', marginTop: '-10px'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              sx: { backgroundColor: '#2B817B' }
            }}
            sx={{ '& button.Mui-selected': { color: '#1A1b24' }, }}
          >
            <Tab disableRipple={true} label="Active" {...a11yProps(0)}
              sx={{
                marginBottom: '-20px', fontFamily: 'Outfit', fontSize: { xs: '11px', md: '14px' },
                color: '#9EA3AE', lineHeight: '30px', fontWeight: '600', textTransform: 'none'
              }} />
            <Tab disableRipple={true} label="Not active" {...a11yProps(1)}
              sx={{
                marginBottom: '-20px', fontFamily: 'Outfit', fontSize: { xs: '11px', md: '14px' },
                color: '#9EA3AE', lineHeight: '30px', fontWeight: '600', textTransform: 'none'
              }} />
            <Tab disableRipple={true} label="Under review" {...a11yProps(1)}
              sx={{
                marginBottom: '-20px', fontFamily: 'Outfit', fontSize: { xs: '11px', md: '14px' },
                color: '#9EA3AE', lineHeight: '30px', fontWeight: '600', textTransform: 'none'
              }} />
            <Tab disableRipple={true} label="Draft" {...a11yProps(1)}
              sx={{
                marginBottom: '-20px', fontFamily: 'Outfit', fontSize: { xs: '11px', md: '14px' },
                color: '#9EA3AE', lineHeight: '30px', fontWeight: '600', textTransform: 'none'
              }} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} sx={{background: 'green'}}>
                {activeDishes ? (<ActiveDishes title={'No dishes has been added, let’s start adding'} />) : 
                (<ActiveDishesList />)}  
        </TabPanel>
        <TabPanel value={value} index={1}>
        <NotActiveDishes />
        
        </TabPanel>
        <TabPanel value={value} index={2}>
        <DishesUnderReview />
        
        </TabPanel>
        <TabPanel value={value} index={3}>
        <DishesDraft />
        
        </TabPanel>

      </Box>
        </>
      )}
    </Box>
  )


}


