import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
// import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";
import ImageSection from "../../components/Menu/ImageSection";
import CuisineCategoryCard from "./CuisineMenu/CuisineCategoryCard";
import { Data } from "./CuisineMenu/config";
import CustomInput from "components/Inputs/CustomInput";
import { useCuisineAddMutation } from "api/cuisine";
import debounce from "lodash.debounce";
import { useFormik } from "formik";
import { CenteredBoxContainer } from "components/Containers";

const Button1 = {
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "20px",
  textTransform: "capitalize",
  color: "#2B817B",
  marginTop: "10px",
};

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <DialogTitle sx={{ m: 0, p: 0 }}>
            {onClose ? (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  // position: 'absolute',
                  position: "left",
                  right: 8,
                  top: 8,
                  color: "#E75C62",
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
        </Box>
        <Box>
          <DialogTitle sx={{ m: 0, p: 0, pt: 0 }} {...props}>
            {children}
          </DialogTitle>
        </Box>
      </Box>
    </>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const TypoTitle = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 14),
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "32px",
  color: "#1A1824",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

const Typo1 = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 17),
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "20px",

  // display: "flex",
  alignItems: "center",
  // textAlign: "center",

  color: "#1A1824",
  paddingBottom: "8px",
}));


export default function AddCuisine({isOpen,handleClose,handleSelected, setIsShownButtonBoxFunc }) {

  const [open, setOpen] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  const [isShownCuisine, setIsShownCuisine] = useState(true);
  const [cuisine, setCuisine] = useState("Arabian Cuisine");
  const [subCuisine, setSubCuisine] = useState("");
  const [disable, setDisable] = useState(false);
  const [image, setImage] = useState("./images/image profile.svg");

  const [addCuisine, { isLoading }] = useCuisineAddMutation();

  const handleClickCheckbox = () => {
    // setOpen(!open);
    setCheckbox(!checkbox);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const [val, setVal] = React.useState("");

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const ItemStyle = {
    "& .Mui-Selected": {
      color: "green",
    },
  };

  const onChangeValue = React.useCallback(
    debounce((e) => {
      setDisable(true);
    }, 800),
    []
  );

  const handleCloseBtn = (event) => {
    handleClose();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openBox = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseBox = () => {
    setAnchorEl(null);
  };

  const formik = useFormik({
    initialValues: {
      cuisine: "",
      subCuisine: ""
    },
    onSubmit: (values) => {
      addCuisine(values);
      setIsShownCuisine((current) => !current);
      handleClose();
      setIsShownButtonBoxFunc(true);
    },
  });

  return (
    <>
      <div>
        <Dialog
          aria-labelledby="customized-dialog-title"
          open={isOpen}
          sx={{
            color: "#E75C62",
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: {
                  xl: "600px",
                  lg: "500px",
                  md: "500px",
                  sm: "500px",
                  xs: "500px",
                },
                height: {
                  xl: "400px",
                  lg: "auto",
                  md: "auto",
                  sm: "auto",
                  xs: "auto",
                },
              },
            },
          }}
        >
          <DialogTitle
            id="customized-dialog-title"
            sx={{ display: "flex" }}
          >
            <Box>
              <IconButton
                aria-label="close"
                onClick={handleCloseBtn}
                sx={{
                  position: "left",
                  right: 8,
                  top: 0,
                  color: "#E75C62",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                pl: {
                  xl: "180px",
                  lg: "120px",
                  md: "120px",
                  sm: "120px",
                  xs: "50px",
                },
              }}
            >
              <TypoTitle>Add Cuisine</TypoTitle>
            </Box>
          </DialogTitle>

          <DialogContent>
            <form onSubmit={formik.handleSubmit} onChange={() => { onChangeValue() }}>

            <Box>
                <CenteredBoxContainer>
                  <img
                    src={image}
                    alt=""
                    style={{ width: "96px", height: "97px" }}
                  />
                </CenteredBoxContainer>
                <CenteredBoxContainer>
                  <Button
                    sx={Button1}
                    variant="text"
                    component="label"
                    startIcon={<AddIcon />}
                  >
                    Change Photo
                    <input
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                      id="image"
                      image="image"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "image",
                          event.currentTarget.files[0]
                        );
                      }}
                    />
                  </Button>
                </CenteredBoxContainer>
                <CenteredBoxContainer>
                  <Box>
                    <Typo1
                      sx={{
                        maxWidth: "230px",
                        pb: "18px",
                        textAlign: "center",
                      }}
                    >
                      *uploaded photos are 1 : 1 in size and a maximum of 2 mb
                    </Typo1>
                  </Box>
                </CenteredBoxContainer>
              </Box>
              <Box>
                <Box>
                  <Typo1
                    sx={{
                      fontSize: {
                        xl: "18px",
                        lg: "14px",
                        md: "14px",
                        sm: "14px",
                        xs: "14px",
                      },
                      fontWeight: "500",
                    }}
                  >
                    Cuisine
                  </Typo1>
                </Box>

                <CustomInput
                  id="cuisine"
                  name="cuisine"
                  value={formik.values.cuisine}
                  onChange={formik.handleChange}
                />
                {/* <MenuButton1 setDisableFunc={setDisable}/> */}
              </Box>

              <Box mt="16px">
                <Box>
                  <Typo1
                    sx={{
                      fontSize: {
                        xl: "18px",
                        lg: "14px",
                        md: "14px",
                        sm: "14px",
                        xs: "14px",
                      },
                      fontWeight: "500",
                    }}
                  >
                    Sub-cuisine <span>(Optional)</span>
                  </Typo1>
                </Box>
                {/* <MenuButton2 /> */}
                <CustomInput

                  id="subCuisine"
                  name="subCuisine"
                  value={formik.values.subCuisine}
                  onChange={formik.handleChange}

                />
              </Box>

              <DialogActions sx={{ justifyContent: "center", mt: "32px" }}>
                <Button
                  variant="outlined"
                  onClick={handleClose}
                  sx={{
                    borderColor: "#2B817B",
                    color: "#2B817B",
                    width: {
                      xl: "120px",
                      lg: "120px",
                      md: "120px",
                      sm: "80px",
                      xs: "70px",
                    },
                    height: {
                      xl: "auto",
                      lg: "40px",
                      md: "auto",
                      sm: "auto",
                      xs: "auto",
                    },
                    "&:hover": {
                      borderColor: "#2B817B",
                    },
                    textTransform: "capitalize",
                  }}
                >
                  Close
                </Button>

                <Button
                  disabled={disable ? false : true}
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: "#2B817B",
                    width: {
                      xl: "120px",
                      lg: "120px",
                      md: "120px",
                      sm: "80px",
                      xs: "70px",
                    },
                    height: {
                      xl: "auto",
                      lg: "40px",
                      md: "auto",
                      sm: "auto",
                      xs: "auto",
                    },
                    "&:hover": {
                      backgroundColor: "#2B817B",
                    },
                    "&.Mui-disabled": {
                      color: "#fff",
                      background: "#D5E6E5",
                    },
                    textTransform: "capitalize",
                  }}
                >
                  Save
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Box
        sx={
          {
            // pt: "40px"
          }
        }
      >
        {/* {isShownCuisine ? <ArabianCuisineMenu /> : <ImageSection />} */}
        {isShownCuisine ? (
          <CuisineCategoryCard
            title={"Arabian Cuisine"}
            Data={Data}
            subTitle={"6 Sub-cuisine"}
            handleOnClick={(e)=>handleSelected(e)}
          />
        ) : (
          <ImageSection />
        )}
      </Box>
    </>
  );
}
