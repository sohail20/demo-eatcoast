import React,{useState} from "react";
import { Box, Grid, Checkbox } from "@mui/material";
function MealPlanCheckBox() {
    const [mealCheckBoxes, setMealCheckBoxes] = useState([]);
   

  const getValue = (index, val) => {
    if (mealCheckBoxes.includes(val)) {
      const tmpArray = mealCheckBoxes.filter((e) => e !== val);
      setMealCheckBoxes(tmpArray);
      return;
    }

    setMealCheckBoxes([...mealCheckBoxes, val]);
  };

 
  return (
    <>
      <Box
        sx={{
          margin:'10px 40px 0px 40px',
          border: "1px solid #E1E1E6",
          padding: "12px 20px",
          borderRadius: "8px",
          minHeight: "120px",
          
        }}
      >
        <Box>
          <Grid container spacing={2}>
            {[
              { title: "Vegetarian" },
              { title: "Vegan" },
              { title: "Halal" },
              { title: "Gluten - friendly" },
              { title: "Prescetarian" },
              { title: "Low-crab" },
              { title: "Diery-free" },
              { title: "Lactose-free" },
            ].map((item, index) => {
              return (
                <Grid key={index} lg={3} md={3} sm={6} xs={6} item>
                  <Box>
                    <Checkbox
                      value={item.title}
                      onChange={(e) => getValue(index, item.title)}
                    />
                    {item.title}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default MealPlanCheckBox;
