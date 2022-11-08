import { Box, Button, Grid} from '@mui/material'
import React, { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Topperdashboard } from './Topperdashboard'
import { Employee } from './Employee'
import { Order } from './Order'
import { Menu } from './Menu'
export const RoutingDashboard = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const[dashboardPage,setdashboardPage] = useState(true);
    const [empPage, setempPage] = useState(false);
    const [menuPage, setmenuPage] = useState(false);
    const handleStepper = () => {
        if (activeStep < 3) {
            setActiveStep(activeStep + 1);
        }
    }
    const handleStepperPrev = () => {
        if (activeStep > - 0) {
            setActiveStep(activeStep - 1);
        }
    }
console.log(activeStep)

    const switchdPages=()=>{
        switch (activeStep) {
            case 0:
                return <Employee />
            case 1:
                return <Menu />
            case 2:
                return <Order />
            default:
                return "not found ";
        }
    }
    const routes = [
        {

            name: 'Homes1',
            icon: 'logo'
        },
        {

            name: 'Homes2',
            icon: 'LOGO'
        },
        {

            name: 'Homes3',
            icon: 'LOGO'
        }
    ]
    const handleFirstPage = () => {
        setempPage(false);
        setdashboardPage(true);
        setmenuPage(false);
    }

    const handleEmpPaage = () => {
        setempPage(true);
        setdashboardPage(false);
        setmenuPage(false);
    }

    const handleMenu = () => {
        setempPage(false);
        setdashboardPage(false);
        setmenuPage(true);
    }

  return (
    <div>
        <Box>
            <Grid container>
                <Grid item xs={1.5} sx={{background: 'red'}}>
                      <Box sx={{ maxWidth: '160px', background: 'red', minHeight: '100vh' }}>
                          <Box>
                              {/* {routes.map((route) => {
                                  return (<Button onClick={gotoLink} key={route.name} >
                                      <Box>
                                          {route.icon}
                                      </Box>
                                      <div>
                                          {route.name}
                                      </div>
                                  </Button>
                                  )
                              })} */}
                              <Button onClick={handleFirstPage}>
                                   Gat dashoard</Button>
                              <Button onClick={handleEmpPaage}>Emp Page</Button>
                              <Button onClick={handleMenu}>Menu</Button>
                              <Button>Abc3</Button>
                          </Box>
                      </Box>



                     </Grid>    
                         <Grid item xs={10.5} sx={{ background: 'green' }}>
                        <Topperdashboard/>
                      <Box>
                            {
                              dashboardPage?<Box><h1>Hello 1</h1>
                              </Box> : empPage ? <Employee /> : menuPage?<Menu/>:''
                            }
                      </Box>
                     </Grid>
            </Grid>


        </Box>
        
          
        </div>
  )
}
