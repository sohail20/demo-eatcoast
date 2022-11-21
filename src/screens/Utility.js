import { Checkbox, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Utility = () => {
  const data =[{name: 'name'},{ name:'name2'}, {name:'name3'},{name: 'name4'}, {name:'name5'}];
  const [first, setfirst] = React.useState(data);
  const handleCheckValue=(e)=>{
    let { value, checked, name } = e.target; 
  let temArr = first.map( item =>item.name === name ? { ...item, isChecked: checked}: item
  );
  console.log( temArr);
  }
  return (
  <>
      <Box mt={9} display={'flex'} justifyContent={'center'}></Box>
      { data.map(item=>{
      return(<>
      <label>{item.name}</label>
      <Checkbox checked={data?.isChecked || false}  value={item.name} name={item.name} onChange={handleCheckValue}
        >
        </Checkbox>
        </>
      )
    })}
   
  </>
  )
}
