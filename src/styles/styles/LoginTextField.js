import { TextField, withStyles } from '@mui/material'
import React from 'react'


const styles=()=>({
    default: {
        marginBottom: 19,
        width: '100%', background: '#F6F6F6', height: '40px',
        border: '1px solid #E1E1E6', borderRadius: '6px',
        textColor: 'black',

    }
})

 const LoginTextField = () => {
  return (
        <TextField 
          variant='filled'
          color='loginField'
          label="Email"
          defaultValue=""
          size="small"
          type="email" autoFocus={true}
        />

  )
}

export default LoginTextField;