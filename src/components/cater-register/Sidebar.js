import { Box, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FinshSvg } from '../../Assets/Svg/FinshSvg'
export const Sidebar = ({ children }) => {

    const routes=[
        {
        path: '/',
        name: 'Homes1',
        icon: <FinshSvg />
    },
        {
            path: '/signIn',
        name: 'Homes2',
        icon: 'LOGO'
    },
        {
        path: '/home',
        name: 'Homes3',
        icon: 'LOGO'
    }
]
const [isOpen setIsOpen ]=useState


  return (
   <>
   <Box sx={{maxWidth: '160px', background: 'red', minHeight: '100vh'}}>
        <Box> 
            {routes.map((route)=>{
               return( <NavLink to={route.path} key={route.name}>
                    <IconButton>
                        {route.icon}                        
                    </IconButton>
                    <div>
                        {route.name}
                    </div>
                </NavLink>
            )})}
        </Box>
            <main>{children}</main>
   </Box>
   
   </>
  )
}
