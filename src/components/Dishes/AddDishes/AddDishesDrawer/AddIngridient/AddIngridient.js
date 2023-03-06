import { Box } from "@mui/system";
import React, { useState } from "react";
import { Button, Select, MenuItem, styled, Typography, Container, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { CenteredBoxContainer, FlexBoxContainer } from "components/Containers";
import CustomIconButton from "components/Button/CustomIconButton";
import CustomInput from "components/Inputs/CustomInput";


const IngridientTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "outfit",
  fontSize: "16px",
  fontWeight: "400",
  color: "#1A1824",
  marginTop: "5px",
  marginLeft: "10px"
}));

const Para = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "400",
  color: "#1A1824",
}));

const Btn = styled(Button)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "600",
  textTransform: "capitalize",
}));

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i].id === obj.id) {
      return true;
    }
  }
  return false;
}

export const AddIngridient = ({ title, handleUpdateData, type, data, handleClose }) => {
  let [search, setSearch] = useState("")
  let [addMode, setAddMode] = useState(false)
  const [selectedList, setSelectedList] = useState([])

  const handleAddList = (item) => {
    if (!containsObject(item, selectedList)) {
      setSelectedList([...selectedList, item])
      setAddMode(false)
      setSearch("")
    }
  }

  const handleDelete = (value) => {
    let deleted = selectedList.filter(
      (item) => item.id !== value.id
    );
    setSelectedList([...deleted]);
  };

  const handleSave = () => {
    const singleString = []
    selectedList.map((item) => {
      singleString.push(item.name)
    })

    handleUpdateData(singleString)
  }

  return (
    <>
      <Container
        sx={{
          width: { lg: "540px", md: "540px", sm: "540px", xs: "100%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "35px",
          // paddingLeft: "32px", paddingRight: "32px"
        }}
      >
        <IconButton aria-label="delete" onClick={handleClose}>
          <CloseIcon sx={{ fill: "#E75C62" }} />
        </IconButton>

        <Box>
          <Para
            sx={{
              fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "16px" },
              fontWeight: "600",
            }}
          >
            {title}
          </Para>
        </Box>
        <Box sx={{ paddingRight: "10px" }}>
          <Btn
            sx={{
              padding: "10px 16px",
              backgroundColor: "#2B817B",
              color: "white",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#2B817B"
              }
            }}
            onClick={handleSave}
          >
            Save
          </Btn>
        </Box>
      </Container>
      <Box pr={"32px"} pl={"32px"} pt={"35px"}>
        {selectedList.length > 0 &&
          selectedList.map((item, index) => {
            return (
              <Box sx={{
                border: "1px solid #E1E1E6",
                marginleft: "10px",
                marginRight: "10px",
                borderRadius: "6px",
                background: "#FFFFFF",
                mb: 1,
              }}>
                <FlexBoxContainer>
                  <Box display="flex" textAlign="center" justifyContent="center" pl={2}>
                    <img src={item.image} width={"40px"} alt="" />
                    <IngridientTitle>{item.name}</IngridientTitle>
                  </Box>
                  <CustomTextField
                    onChangeValue={(value) => {
                      selectedList[index].quantity = parseInt(value)
                    }}
                  />
                  <SelectBox
                    onSelect={(value) => {
                      selectedList[index].unit = value
                    }}
                  />
                  <Box>
                    <Typography
                      onClick={() => handleDelete(item)}
                      sx={{
                        color: "#E75C62",
                        padding: "5px",
                        cursor: "pointer",
                        marginRight: "10px"
                      }}
                    >
                      X
                    </Typography>
                  </Box>
                </FlexBoxContainer>
              </Box>
            )
          })}
        <Box>
          <CenteredBoxContainer>
            <CustomIconButton
              icon={<AddIcon sx={{ width: "16px", height: "16px" }} />}
              label="Other"
              onClick={() => {
                setAddMode(true)
              }}
            />
          </CenteredBoxContainer>
        </Box>

        <Box width={"100%"}>
          {addMode && <CustomInput
            label="Search"
            placeholder={`Search your ${type === "ingredient" ? "Ingridients" : "Nutritions"}`}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />}

          {search !== "" && <>
            {
              data.filter((item) => { if (item.name.includes(search)) return item }).map((item) => {
                return (
                  <Box
                    display="flex"
                    cursor={"pointer"}
                    textAlign="center"
                    justifyContent="left"
                    pl={2}
                    onClick={() => {
                      handleAddList(item)
                    }}
                  >
                    <img src={item.image} width={"40px"} alt="" />
                    <IngridientTitle>{item.name}</IngridientTitle>
                  </Box>
                )
              })
            }
          </>}
        </Box>
      </Box>
    </>
  );
};

const SelectBox = ({ onSelect }) => {
  const [selected, setSelected] = useState("gr");
  return (
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
        value={selected}
        label="Age"
        defaultValue={"gr"}
        onChange={(e) => {
          onSelect(e.target.value)
          setSelected(e.target.value)
        }}
      >
        <MenuItem value="pcs"> Pcs</MenuItem>
        <MenuItem value="%"> %</MenuItem>
        <MenuItem value="gr"> Gr</MenuItem>
        <MenuItem value="kg"> Kg</MenuItem>
      </Select>
    </Box>
  )
}

const CustomTextField = ({ onChangeValue }) => {
  return (
    <Box>
      <CustomInput
        width={"60px"}
        type="number"
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </Box>
  )
}