import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { MerchantRegSvg } from '../../assets/Svg/MerchantRegSvg'
import { Box, Button, Container } from '@mui/material';
import { Finsh } from '../../components/Finsh';
import { useFormik } from 'formik';
import { Ownerinfo } from '../../components/OwnerInfo';
import { WaitingSvg } from '../../components/WaitingSvg';
import { MerchantRegis } from '../../components/MerchantRegis'

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            // backgroundImage: 'linear-gradient(to left, #2B817B 0%, #2B817B 100%)',
            backgroundColor:' #2B817B', 
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            // backgroundImage: 'linear-gradient(to left, #2B817B 0%, #2B817B 100%)',
            backgroundColor:' #2B817B',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: '1.5px dashed gray',
        // backgroundColor:
        //     theme.palette.mode === 'darh' ? theme.palette.grey[300] : '#eaeaf0',
        // borderRadius: 7,
        
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient(to left, #2B817B 0%, #2B817B 100%)',
        }),
        ...(ownerState.completed && {
            // backgroundImage:
            // 'linear-gradient(to left, #2B817B 0%, #2B817B 100%)',
            backgroundColor: '#2B817B'
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <MerchantRegSvg />,
        2: <i class="fa-solid fa-user-pen" style={{ color:'background: #FFFFFF;'}}/>,
        3: <i class="fa-solid fa-rotate" />,
        4: <i class="fa-regular fa-circle-check" />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            { icons[String(props.icon)] }
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

const steps = [`Merchant Registration`, `Owner Information`, `Waiting`, `Finish`];


export const Regsteppers=() =>{
    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepper = () => {
        if (activeStep < 3) {
            setActiveStep(activeStep + 1);
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
    console.log(formik.values)

    const moveFormCompo = (activestep) => {
        switch (activeStep) {
            case 0:
                return (
                    <MerchantRegis formik={formik} handleStepper={handleStepper}
                    />
                )
            case 1:
                return (
                    <Ownerinfo formik={formik} />
                )
            case 2:
                return (
                    <WaitingSvg handleStepperPrev={handleStepperPrev} />
                )
            case 3:
                return (
                    <Finsh />
                )
            default:
                return "did not get any value";
        }
    }


    return (
        <Container maxWidth='md'>
            <Stack sx={{ width: '100%', marginTop: '40px' }} spacing={1} >
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
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '170px' }}>
                {activeStep === 0 ? (null) : activeStep === 1 ?
                    (<Box >
                        <Button disableRipple={true}  sx={{ textTransform: 'none',
                        width: '110px',
                         marginRight: '15px',
                        background: '#FFFFFF',
                        border: ' 1px solid #80B3B0', fontWeight: '600',
                        borderRadius: '4px',
                        color: '#2B817B', fontFamily: 'Outfit', fontSize: '14px',
                        '&:hover': { color: '#2B817B', background: '#fff' }
                }}
                            onClick={handleStepperPrev}
                        >
                        Back
                    </Button>
                        <Button disableRipple={true}  sx={{ textTransform: 'none',
                            width: '110px',
                            
                            background: '#2B817B',
                            border: ' 1px solid #80B3B0', fontWeight: '600',
                            borderRadius: '4px',
                            color: '#fff', fontFamily: 'Outfit', fontSize: '14px',
                            '&:hover': { color: '#fff', background: '#2B817B' }
                     }} 
                            onClick={handleStepper}>
                            Submit
                        </Button>

                    </Box>) : null
                }

            </Box>


        </Container>
    );
}
