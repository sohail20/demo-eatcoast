import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
// import { MerchantRegSvg } from '../../assets/Svg/MerchantRegSvg'
import { Box, Button, Container } from "@mui/material";
import { Finsh } from "components/Finsh";
import { useFormik } from "formik";
import { Ownerinfo } from "components/OwnerInfo";
import { WaitingSvg } from "components/WaitingSvg";
import { MerchantRegis } from "components/MerchantRegis";
import { BiStore } from "react-icons/bi";
import { useGetRegisterMutation } from "api/signup";
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#2B817B",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#2B817B",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: "2px dashed gray",
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#D5E6E5",
  backgroundColor: "#fff",

  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#2B817B",
    // border: '2px solid #2B817B'
    border: "2px solid #20615C",
  }),
  ...(ownerState.completed && {
    // border: '2px solid #2B817B',
    backgroundColor: "#2B817B",
    border: "2px solid #20615C",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <BiStore />,
    2: <img src="images/user-edit.svg" />,
    3: <img src="images/refresh-2.svg" />,
    4: <img src="images/tick-circle.svg" />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  `Merchant Registration`,
  `Owner Information`,
  `Waiting`,
  `Finish`,
];

export const Regsteppers = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [getRegister, { isLoading }] = useGetRegisterMutation();

  const handleStepper = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleStepperPrev = () => {
    if (activeStep > -0) {
      setActiveStep(activeStep - 1);
    }
  };

  const formik = useFormik({
    initialValues: {
      merchantName: "",
      address: "",
      certificate: "",
      licence: "",
      idCard: "",
      ownerName: "",
      email: "",
      phone: "",
      pin: "",
    },
    
    onSubmit: (values) => {
      let formData = new FormData(); //formdata object

      Object.keys(values).map((keys) => {
        formData.append(keys, values[keys]);
      });

      formData.append("password", values.pin);
        
      getRegister(formData).then((res) => {
        if (res.data) handleStepper();
      });
    },
  });

  const moveFormCompo = (activestep) => {
    switch (activeStep) {
      case 0:
        return <MerchantRegis formik={formik} handleStepper={handleStepper} />;
      case 1:
        return <Ownerinfo formik={formik} />;
      case 2:
        return <WaitingSvg email={formik.values.email} handleStepperPrev={handleStepperPrev} />;
      case 3:
        return <Finsh />;
      default:
        return "did not get any value";
    }
  };

  useEffect(() => {
    if (formik.values.certificate !== "") {
      let reader = new FileReader();
      reader.onloadend = () => {
        //console.log(reader.result);
      };

      reader.readAsDataURL(formik.values.certificate);
    }
  }, [formik]);

  return (
    <Container maxWidth="md">
      <Stack sx={{ width: "100%", marginTop: "40px" }} spacing={1}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label1, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <span
                  sx={{
                    fontSize: "12px",
                    fontFamily: "Outfit",
                    fontWeight: "500",
                    color: "#1A1824",
                  }}
                >
                  {label1}
                </span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <form onSubmit={formik.handleSubmit}>
        {moveFormCompo(steps)}
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "170px",
            }}
          >
            {activeStep === 0 ? null : activeStep === 1 ? (
              <Box>
                <Button
                  disableRipple={true}
                  sx={{
                    textTransform: "none",
                    width: "110px",
                    marginRight: "15px",
                    background: "#FFFFFF",
                    border: " 1px solid #80B3B0",
                    fontWeight: "600",
                    borderRadius: "4px",
                    color: "#2B817B",
                    fontFamily: "Outfit",
                    fontSize: "14px",
                    "&:hover": { color: "#2B817B", background: "#fff" },
                  }}
                  onClick={handleStepperPrev}
                >
                  Back
                </Button>
                <Button
                  disableRipple={true}
                  sx={{
                    textTransform: "none",
                    width: "110px",

                    background: "#2B817B",
                    border: " 1px solid #80B3B0",
                    fontWeight: "600",
                    borderRadius: "4px",
                    color: "#fff",
                    fontFamily: "Outfit",
                    fontSize: "14px",
                    "&:hover": { color: "#fff", background: "#2B817B" },
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            ) : null}
          </Box>
        </>
      </form>
    </Container>
  );
};
