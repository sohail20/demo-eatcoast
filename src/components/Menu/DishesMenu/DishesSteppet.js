import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Box, Button, Container } from '@mui/material';
import { useFormik } from 'formik';
import { BiStore } from 'react-icons/bi'
import AddDishes from '../../Dishes/AddDishes/AddDishes';
import DishesStepper1 from './DishesStepper1';
import DishesStepper2 from './DishesStepper2';
import DishesStepper3 from './DishesStepper3';
import Overlay from './overlay/Overlay';
import { ActiveDishes } from './ActiveDishes';



const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: '#2B817B',

        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: '#2B817B',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: '2px dashed gray',
    },
}));


const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#D5E6E5',
    backgroundColor: '#fff',

    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundColor: '#2B817B',
        // border: '2px solid #2B817B'
        border: '2px solid #20615C',

    }),
    ...(ownerState.completed && {
        // border: '2px solid #2B817B',
        backgroundColor: '#2B817B',
        border: '2px solid #20615C',

    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <img src='images/box.svg' sx={{ color: '#fff' }} alt='' />,
        2: <img src='images/reserveDishes.svg' alt='' sx={{ color: '#fff' }} />,
        3: <img src='images/bignote.svg' alt='' />,
        4: <img src='images/tick-circle.svg' alt='' />,

    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
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
}

const steps = [`Add Dishes`, `Cusine Type`, `Detail Information`, `Verified`];


export const DishesSteppet = ({ setStepper }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepper = () => {
        if (activeStep < 3) {
          setActiveStep(activeStep+1);
        }
    }
    const handleStepperPrev = () => {
        if (activeStep > -0) {
            setActiveStep(activeStep - 1);
        }
    }



    const formik = useFormik({
        initialValues: {
            merchantName: '',
            address: '',
            certification: '',
            BusinessLisence: '',
            IDCardNum: '',
            OwnerName: '',
            EmailAddress: '',
            phoneCode: '',
            phoneNum: '',
            setPin: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    // console.log(formik.values)

    const moveFormCompo = (activestep) => {
        switch (activeStep) {
            case 0:
                return <DishesStepper1 />;
            case 1:
                return <DishesStepper2 />
            case 2:
                return <DishesStepper3 />
            case 3:
                return <ActiveDishes title={'Your dishes are under review, please wait'} />
            default:
                return "did not get any value";
        }
    }
    const [isDialogOpen, setIsDialogOpen] = React.useState(false)

    const handleOpenDialogDisshes = (activeStep) => {
        if (activeStep === 2){
            setIsDialogOpen(true);
        }else{
            handleStepper()
        }
    }

    return (<>
        <Container maxWidth='md' sx={{ marginTop: '-9px', }}>
            <Box sx={{ cursor: 'pointer', color: '#E75C62', fontWiight: 500 }} onClick={() => setStepper(false)}>X</Box>
            <Stack sx={{ width: '100%' }} spacing={1} >
                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                    {steps.map((label1, index) => (
                        <Step key={index}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}><span
                                sx={{
                                    fontSize: '12px', fontFamily: 'Outfit', fontWeight: '500', color: '#1A1824'
                                }}>{label1}</span></StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Stack>
            <form onSubmit={formik.handleSubmit} >
                {moveFormCompo(steps)}

            </form>
            <Box mt={3} display={'flex'} justifyContent={'center'}>
                {activeStep === 0 ? (
                  <>
                  <Button
                        onClick={() => setStepper(false)}
                        sx={{
                            textTransform: 'none',
                            width: '120px',
                            height: '40px',
                            background: '#FFFFFF',
                            border: ' 1px solid #80B3B0', fontWeight: '600',
                            borderRadius: '4px',
                            color: '#2B817B', fontFamily: 'Outfit', fontSize: '14px',
                            '&:hover': { color: '#2B817B', background: '#fff' },
                            mr: 1.5
                        }}>
                        Close
                    </Button>
                     <Button
                        onClick={handleStepper}
                        sx={{
                            textTransform: 'none',
                            width: '120px',
                            height: '40px',
                            border: ' 1px solid #80B3B0', fontWeight: '600',
                            borderRadius: '4px',
                            fontFamily: 'Outfit', fontSize: '14px',
                            color: '#fff', 
                            background: '#2B817B',
                            '&:hover': { color: '#fff', background: '#2B817B' },
                            mr: 1.5
                        }}>
                        Submit
                    </Button></>
                ) : activeStep === 1 ? (
                   <>
                   <Button
                        onClick={handleStepperPrev}
                        sx={{
                            textTransform: 'none',
                            width: '120px',
                            height: '40px',
                            background: '#FFFFFF',
                            border: ' 1px solid #80B3B0', fontWeight: '600',
                            borderRadius: '4px',
                            color: '#2B817B', fontFamily: 'Outfit', fontSize: '14px',
                            '&:hover': { color: '#2B817B', background: '#fff' },
                            mr: 1.5
                        }}>
                        Save as draft
                    </Button>
                   <Button
                        onClick={handleStepper}
                        sx={{
                            textTransform: 'none',
                            width: '120px',
                            height: '40px',
                            border: ' 1px solid #80B3B0', fontWeight: '600',
                            borderRadius: '4px',
                             fontFamily: 'Outfit', fontSize: '14px',
                            color: '#fff',
                            background: '#2B817B',
                            '&:hover': { color: '#fff', background: '#2B817B' },
                            mr: 1.5
                        }}>
                        Next
                    </Button>
                            </> 
                ): 
                activeStep === 2 ? 
                (
                                <>
                                    <Button
                                        onClick={handleStepperPrev}
                                        sx={{
                                            textTransform: 'none',
                                            width: '120px',
                                            height: '40px',
                                            background: '#FFFFFF',
                                            border: ' 1px solid #80B3B0', fontWeight: '600',
                                            borderRadius: '4px',
                                            color: '#2B817B', fontFamily: 'Outfit', fontSize: '14px',
                                            '&:hover': { color: '#2B817B', background: '#fff' },
                                            mr: 1.5
                                        }}>
                                        Save as draft
                                    </Button>
                                  
                                        <Button
                                            onClick={()=>setIsDialogOpen(true)}
                                            sx={{
                                                textTransform: 'none',
                                                width: '120px',
                                                height: '40px',
                                                border: ' 1px solid #80B3B0', fontWeight: '600',
                                                borderRadius: '4px',
                                                fontFamily: 'Outfit', fontSize: '14px',
                                                color: '#fff',
                                                background: '#2B817B',
                                                '&:hover': { color: '#fff', background: '#2B817B' },
                                                mr: 1.5
                                            }}>
                                            Next
                                        </Button>
                                </> 
                ) 
                :(

                            <Button
                                onClick={handleStepperPrev}
                                sx={{
                                    textTransform: 'none',
                                    width: '130px',
                                    height: '40px',
                                    border: ' 1px solid #80B3B0', fontWeight: '600',
                                    borderRadius: '4px',
                                     fontFamily: 'Outfit', fontSize: '14px',
                                    color: '#fff',
                                    background: '#2B817B',
                                    '&:hover': { color: '#fff', background: '#2B817B' },
                                    mr: 1.5
                                }}>
                                Back to dishes
                            </Button> 
                ) }

               

            </Box>
            <Overlay setActiveStep={setActiveStep}  ActiveStep={activeStep} isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
        </Container>
 </>   );
}


// handleStepper = { handleStepper(activeStep + 1)}