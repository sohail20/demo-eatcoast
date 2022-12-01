import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { addIngredient } from './configdishes'

export default function EmptyModel() {
  const arryIngre = Object.keys(addIngredient).map(function(key){
    return addIngredient[key];
  })
console.log(arryIngre)

let array =[];
for( let Ingredient in addIngredient){
  array.push([Ingredient, addIngredient[Ingredient]])
}
console.log(array,"to check array")

const options = [array];

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </div>
  );
}


































// import { Autocomplete, Chip, MenuItem, Select, TextField } from '@mui/material'
// import { Box } from '@mui/system'
// import React from 'react'
// import { addIngredient } from './config'

// export default function EmptyModel() {
    
//   const arryIngre = Object.keys(addIngredient).map(function(key){
//     return addIngredient[key];
//   })
// console.log(arryIngre)

//   return (
//     <>
//           <Autocomplete
//               multiple
//               id="country-select-demo"
//               sx={{ width: 300 }}
//               options={addIngredient}
//               autoHighlight
//               getOptionLabel={(option) => option.title}
//               renderOption={(props, option) => (
//                   <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
//                       <img
//                           loading="lazy"
//                           width="40"
//                           src={option.image}
//                           alt=""
//                       />
//                       {option.title} 
//                       <Select
//                           labelId="demo-simple-select-label"
//                           id="demo-simple-select"
//                         //   value={item.qty}
//                           label="Age"
//                         //   onChange={(w) => {
//                         //       const tempArray = ind
//                         //       tempArray[index].qty = w.target.value
//                         //       console.log(tempArray.qty, " here-=========")
//                         //       setInd([...tempArray])
//                         //       // setItemValue()
//                         //   }}
//                       >
//                           <MenuItem  value={11}>Pcs</MenuItem>
//                           <MenuItem  value={11}>Pcs</MenuItem>
//                           </Select>
//                   </Box>
//               )}
//               renderInput={(params) => (
//                   <TextField
//                       {...params}
//                       placeholder="Favorites"
//                       inputProps={{
//                           ...params.inputProps,
//                           autoComplete: 'new-password', // disable autocomplete and autofill
//                       }}
//                   />
//               )}
//           />
//     </>

//   )
// }
