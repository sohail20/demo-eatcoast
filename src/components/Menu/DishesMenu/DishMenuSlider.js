import styled from "@emotion/styled";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  InputAdornment,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

//-=========== onClick addIngredieent fun start
function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i].value.id === obj.id) {
      return true;
    }
  }
  return false;
}
//-=========== onClick addIngredieent fun end

export default function DishMenuSlider({
  isDrawerOpenStaff,
  formik,
  addIngredient,
  handleUpdateValue,
  selectedModal,
  setIsDrawerOpenStaff,
}) {
  const Typo2 = styled(Typography)(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    color: "#1A1824",
  }));

  const [searchQuerry, setSearch] = React.useState("");
  const [searched, setSearched] = React.useState([]);

  const [ingredientonFly, setingredientonFly] = useState([]);
  const handleSearchevent = (value) => {
    let temArray = [];
    temArray.push({ value });
    if (!containsObject(value, ingredientonFly)) {
      setingredientonFly([...ingredientonFly, ...temArray]);
    }
  };
  const handleCloseProps = (param) => {
    let deleted = ingredientonFly.filter(
      (item) => item.value.id !== param.value.id
    );
    setingredientonFly([...deleted]);
  };

  const [ind, setInd] = useState(ingredientonFly);
  useEffect(() => {
    if (searchQuerry) {
      setSearched(
        addIngredient.filter((item) => {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchQuerry.toLowerCase());
        })
      );
    }
  }, [searchQuerry]);

  const handleAddselecIng = (addQty) => {
    const Qty = addQty.target.value;
    // const exsitItem = ingredientonFly.map(item=> )
  };

  return (
    <>
      <Drawer anchor="right" open={isDrawerOpenStaff}>
        <Box p={2} width="452px" textAlign={"center"} role="presentation">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              textAlign={"start"}
              sx={{ color: "#E75C62", cursor: "pointer" }}
              onClick={() => setIsDrawerOpenStaff(null)}
            >
              X
            </Typography>
            <Typography variant="h6" component="div">
              Request List
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                width: "80px",
                height: "40px",
                background: "#2B817B",
                fontWeight: "600",
                borderRadius: "4px",
                color: "#fff",
                fontFamily: "Outfit",
                fontSize: "14px",
                "&:hover": { color: "#fff", background: "#2B817B" },
              }}
              onClick={()=>{
                const tmpArray = []
                const tmpString = []
                ingredientonFly.map((item)=>{
                  delete item.value.id
                  delete item.value.image
                  tmpString.push(item.value.name)
                  tmpArray.push(item.value)
                })
                formik.setFieldValue(
                  selectedModal === "nutrition"?"nutritionInformation":"ingredient",
                  tmpArray
                );
                setIsDrawerOpenStaff(null)
                setSearched([])
                setingredientonFly([])
                handleUpdateValue(selectedModal,tmpString.join(","))
              }}
            >
              Save
            </Button>
          </Box>
          <Box component={"div"} sx={{ marginTop: "20px" }}>
            <Box
              sx={{
                color: "#9EA3AE",
                width: "120px",
                pt: "0px",
                pb: "0px",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              {ingredientonFly.map((item, index) => {
                return (
                  <Box
                    component="div"
                    width={"430px"}
                    sx={{
                      border: "1px solid #E1E1E6",
                      marginleft: "10px",
                      marginRight: "10px",
                      borderRadius: "6px",
                      background: "#FFFFFF",
                      mb: 1,
                    }}
                    key={item.value.id}
                  >
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box display={"flex"} alignItems={"center"}>
                        <img src={item.value.image} width={"40px"} alt="" />
                        <Typo2>{item.value.title}</Typo2>
                      </Box>
                      <Box display={"flex"} alignItems={"center"}>
                        <Box>
                          <TextField
                            sx={{
                              //border: "1px sloid #E1E1E6",
                              "& fieldset": { border: 'none' },
                              width: "60px",
                              height: "37px",
                              background: "#F6F6F6",
                            }}
                            type="number"
                            onChange={(e)=>{
                              ingredientonFly[index].value.quantity = e.target.value
                            }}
                          />
                        </Box>
                        <Box style={{ padding: "5px" }}>
                          <Select
                            sx={{
                              height: "40px",
                              "& .MuiSelect-select": {
                                color: "#2B817B",
                              },
                              ".MuiOutlinedInput-notchedOutline": {
                                border: "none !important",
                              },
                              "& .MuiSelect-icon": {
                                fill: "#2B817B",
                              },
                            }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={item.value.qty}
                            label="Age"
                            defaultValue={"Gr"}
                            onChange={(e)=>{
                              ingredientonFly[index].value.unit = e.target.value
                            }}
                          >
                            <MenuItem value="Pcs"> Pcs</MenuItem>
                            <MenuItem value="%"> %</MenuItem>
                            <MenuItem value="Gr"> Gr</MenuItem>
                            <MenuItem value="Kg"> Kg</MenuItem>
                          </Select>
                        </Box>
                        <Box>
                          <Typography
                            onClick={() => handleCloseProps(item)}
                            sx={{
                              color: "#E75C62",
                              padding: "5px",
                              cursor: "pointer",
                            }}
                          >
                            X
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Typography
              textAlign="start"
              sx={{
                fontWeight: "500",
                color: "#1A1824",
                fontFamily: "Outfit",
                fontSize: "14px",
              }}
            >
              Search{" "}
            </Typography>

            <TextField
              onChange={(e) => setSearch(e.target.value)}
              id="outlined-static"
              fullWidth
              placeholder="Search your ingredient"
              sx={{
                color: "#1A1B24",
                borderRadius: "6px",
                border: "1px solid  #E1E1E6",
                background: "#F6F6F6",
                "&:hover": {
                  color: "#80B3B0",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  border: "2px solid #80B3B0 !important",
                  outline: "none",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src="/images/search-normal.svg"
                      alt="imgag"
                      sx={{ background: "#F6F6F6" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
            {/* start from  here for search value */}

            {searchQuerry.length > 0
              ? searched.map((search) => {
                  return (
                    <MenuItem
                      sx={{
                        "&:hover": { background: "none" },
                        border: "1px solid #E1E1E6",
                        marginleft: "10px",
                        marginRight: "10px",
                        borderRadius: "6px",
                        background: "#FFFFFF",
                        mb: 1,
                      }}
                      onClick={() => handleSearchevent(search)}
                      key={search.id}
                    >
                      <Box
                        width={"100%"}
                        display={"flex"}
                        justifyContent={"space-between"}
                      >
                        <Box display={"flex"} alignItems={"center"}>
                          <img src={search.image} width={"40px"} alt="" />
                          <Typo2>{search.name}</Typo2>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              border: "1px sloid #E1E1E6",
                              width: "60px",
                              height: "40px",
                              padding: "5px 12px",
                              background: "#F6F6F6",
                            }}
                          >
                            99
                          </Typography>
                        </Box>
                      </Box>
                    </MenuItem>
                  );
                })
              : null}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
