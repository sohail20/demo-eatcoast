import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { MerchantRegSvg } from '../../Assets/Svg/MerchantRegSvg';
import { OwnerInfoSvg } from '../../Assets/Svg/OwnerInfoSvg';
import { WaitingSvg } from '../../Assets/Svg/WaitingSvg';
import { FinshSvg } from '../../Assets/Svg/FinshSvg';


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            color: 'red'
                ,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
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
            '',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            '',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <MerchantRegSvg/>,
        2: <OwnerInfoSvg />,
        3: <WaitingSvg />,
        4: <FinshSvg />,
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
};

const steps = [`Merchant Registration`, 'Owner Info', 'waiting', 'Finsh'];

export default function Regsteppers() {
    return (
        <Stack sx={{ width: '100%', marginTop: '20px' }} spacing={1} >
           
            <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}><span
                        sx={{
                                fontSize: '12px', fontFamily: 'Outfit', fontWeight: '500', color: '#1A1824' 
                        }}>{label}</span></StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}
