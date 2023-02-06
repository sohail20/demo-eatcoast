import React, { useEffect } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BackBtnAndPageTitle from '../../../components/BackBtnAndPageTitle'
import Grid from '@mui/material/Grid';
import SimpleChips from '../../../components/Chips/SimpleChips';
import Chip from "@mui/material/Chip";
import { CiCalendar, CiAlarmOn, CiReceipt } from "react-icons/ci";
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from '@mui/material/IconButton';
import ScheduleMenuListItemCard from '../ScheduleMenuListItemCard';
import ScheduleMenuListItemDetail from '../ScheduleMenuListItemDetail';
import DishDetail from "../DishDetail"
import { useGetSubscriptionDetailQuery } from 'api/subscription';
import FullPageLoader from 'components/Loader/FullPageLoader';

const scheduleMenuListItemArray = [
    {
        date: "Sunday, Sept 09,2021",
        scheduleMenuDetailArr: [
            {
                title: "Main course",
                description: "30 Dishes are selected",
                qty: 2,
                btnText: "See Selected Dishes"
            },
            {
                title: "Main course",
                description: "30 Dishes are selected",
                qty: 2,
                btnText: "See Selected Dishes"
            },
        ]
    },
    {
        date: "Monday, Sept 10,2021",
        scheduleMenuDetailArr: [
            {
                title: "Main course",
                description: "30 Dishes are selected",
                qty: 2,
                btnText: "See Selected Dishes"
            },
            {
                title: "Main course",
                description: "30 Dishes are selected",
                qty: 2,
                btnText: "See Selected Dishes"
            },
        ]
    },
    {
        date: "Tuesday, Sept 11,2021",
        scheduleMenuDetailArr: [
            {
                title: "Main course",
                description: "30 Dishes are selected",
                qty: 2,
                btnText: "See Selected Dishes"
            },
            {
                title: "Main course",
                description: "30 Dishes are selected",
                qty: 2,
                btnText: "See Selected Dishes"
            },
        ]
    },
]

const DetailSubscription = ({ id, setShowDetailSubscriptionFunc }) => {

    const { data: subsDetail, isLoading } = useGetSubscriptionDetailQuery({ id })
    const [dateToFrom, setDateToFrom] = React.useState({ to: "", from: "" })
    const [subscription, setSubscription] = React.useState({})
    const [state, setState] = React.useState({
        right: false,
    });

    const [showScheduleMenuListItemDetail, setShowScheduleMenuListItemDetail] = React.useState(false);
    const [showDishDetail, setShowDishDetail] = React.useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    console.log("subsDetail", subsDetail)
    const list = (anchor) => (
        <>
            <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : { lg: "511.13px", md: "511.13px", sm: "511.13px", xs: "300px", } }} role="presentation">
                <List>
                    <Box p="20px 10px 0 20px">
                        {
                            showScheduleMenuListItemDetail ? (
                                showDishDetail ?
                                    <DishDetail />
                                    : <ScheduleMenuListItemDetail setShowDishDetailFunc={setShowDishDetail}
                                        backBtnFunc={() => setShowScheduleMenuListItemDetail(false)} />
                            )
                                : <ScheduleMenuListItemCard scheduleMenuListItemArr={scheduleMenuListItemArray} setShowScheduleMenuListItemDetailFunc={setShowScheduleMenuListItemDetail} />
                        }
                    </Box>
                </List>
            </Box>
        </>
    );


    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    useEffect(() => {
        if (subsDetail && subsDetail.data) {
            setSubscription(subsDetail.data[0])
            setDateToFrom({ to: new Date(subsDetail.data[0].to).toUTCString(), from: new Date(subsDetail.data[0].from).toUTCString() })
        }
    }, [subsDetail])


    return isLoading ? <FullPageLoader /> : subsDetail && subsDetail.data && subscription && (
        <>
            <BackBtnAndPageTitle title="Detail Subscription" btnTitle="Back" mb={2} btnOnClickHandler={() => setShowDetailSubscriptionFunc(false)} />
            <Box width="100%">
                <Grid container gap={3}>
                    <Grid item xs={12} md={5.8} p="10px" my={1}>
                        <Box width="100%" borderRadius="8px">
                            <img src="images/subscriptionDescription.jpg" alt="subscriptionDescription" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                        </Box>
                        <Box sx={{ mx: { md: 2 } }}>
                            <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center" my="10px">
                                <Chip label={subscription.type} variant="contained" sx={{ background: "#7B49E5", borderRadius: '6px', color: '#fff', my: "3px" }} />
                                <Typography my="3px" border="1px solid #D5E6E5" color="#9EA3AE" p="2px 12px" borderRadius="6px" fontSize="12px" fontWeight="600">7 days left</Typography>
                            </Box>
                            <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center" my="15px">
                                <Typography my="3px" sx={{ fontSize: { xs: "13px", md: "20px" } }} fontWeight="600">
                                    Salmon with chili sause</Typography>
                                <Box textAlign="center">
                                    <Typography my="3px" sx={{ fontSize: { xs: "13px", md: "20px" } }} fontWeight="600">1</Typography>
                                    <Typography my="3px" color="#9EA3AE" sx={{ fontSize: "13px" }} fontWeight="600">Order</Typography>
                                </Box>
                            </Box>
                            <Box my="5px">
                                <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center" my="15px">
                                    <Box my="3px">
                                        <CiCalendar fontSize="16px" />
                                        <Typography component="span" sx={{ verticalAlign: "top", ml: "5px", fontSize: { xs: "13px", md: "14px" } }} color="#545359" fontWeight="500">
                                            {subscription.period} subscription :</Typography>
                                    </Box>
                                    <Box my="3px">
                                        <Typography color="#2B817B" sx={{ textDecoration: "underline", fontSize: { xs: "13px", md: "16px" } }} fontWeight="400" onClick={toggleDrawer("right", true)}>See details</Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center" border="1px solid #E1E1E6" borderRadius="4px" p="2px 8px" my="15px">
                                    <Typography component="span" sx={{ verticalAlign: "top", ml: "5px", fontSize: { xs: "11px", md: "16px" } }} color="#1A1824" fontWeight="400">{dateToFrom.to}</Typography>
                                    -
                                    <Typography component="span" sx={{ verticalAlign: "top", ml: "5px", fontSize: { xs: "11px", md: "16px" } }} color="#1A1824" fontWeight="400">{dateToFrom.from}</Typography>
                                </Box>
                            </Box>
                            <Box my="5px">
                                <Box display="flex" alignItems="center" mt="15px">
                                    <CiAlarmOn fontSize="16px" />
                                    <Typography sx={{ ml: "5px", fontSize: { xs: "13px", md: "14px" } }} color="#545359" fontWeight="500"> Time :</Typography>
                                </Box>
                                <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center" my="3px">
                                    <Box border="1px solid #E1E1E6" borderRadius="4px" p="2px 8px">
                                        <Typography sx={{ verticalAlign: "top", ml: "5px", fontSize: { xs: "11px", md: "16px" } }} color="#1A1824" fontWeight="400">
                                            10.00 am - 01.00 pm</Typography>
                                    </Box>
                                    <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center" sx={{ mt: { xs: "5px", md: "10px" } }}>
                                        <Typography sx={{ verticalAlign: "top", ml: "5px", fontSize: { xs: "13px", md: "14px" } }} color="#9EA3AE" fontWeight="400">
                                            Total paid :</Typography>
                                        <Typography sx={{ verticalAlign: "top", ml: "5px", fontSize: { xs: "16px", md: "20px" } }} color="#1A1824" fontWeight="600">
                                            $ 200.00</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5.8} p="10px" my={1} height="100%">
                        <Box sx={{ mx: { md: 2 } }} my="5px">
                            <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center" my="10px">
                                <Typography sx={{ fontSize: { xs: "13px", md: "18px" } }} color="#9EA3AE" fontWeight="600">
                                    ID : {subscription.subId}</Typography>
                                <Box sx={{
                                    border: '1px solid #81D9A5', bgcolor: '#F1FFF7', borderRadius: '4px',
                                    p: "2px 9px"
                                }}>
                                    <Typography sx={{ fontSize: { xs: "13px", md: "14px" } }} color="#30A15F" fontWeight="400">{subscription.status}</Typography>
                                </Box>
                            </Box>
                            <Box mt="50px" px="10px" border="1px solid #E1E1E6" borderRadius="8px">
                                <Box display="flex" flexWrap="wrap" justifyContent="space-between" my="15px">
                                    <Box>
                                        <Typography sx={{ fontSize: { xs: "13px", md: "18px" } }} color="#1A1824" fontWeight="500">Main course</Typography>
                                        <Typography sx={{ fontSize: { xs: "13px", md: "16px" } }} color="#9EA3AE" fontWeight="400">All Dishes</Typography>
                                    </Box>
                                    <Box display="flex" flexWrap="wrap">
                                        <Typography sx={{ fontSize: { xs: "13px", md: "18px" } }} color="#1A1824" fontWeight="600">2</Typography>
                                        <Typography sx={{ ml: "100px", fontSize: { xs: "13px", md: "18px" } }} color="#1A1824" fontWeight="500">$10.00</Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" flexWrap="wrap" justifyContent="space-between" my="15px">
                                    <Box>
                                        <Typography sx={{ fontSize: { xs: "13px", md: "18px" } }} color="#1A1824" fontWeight="500">Salad Dishes</Typography>
                                        <Typography sx={{ fontSize: { xs: "13px", md: "16px" } }} color="#9EA3AE" fontWeight="400">All Dishes</Typography>
                                    </Box>
                                    <Box display="flex" flexWrap="wrap">
                                        <Typography sx={{ fontSize: { xs: "13px", md: "18px" } }} color="#1A1824" fontWeight="600">1</Typography>
                                        <Typography sx={{ ml: "100px", fontSize: { xs: "13px", md: "18px" } }} color="#1A1824" fontWeight="500">$10.00</Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" flexWrap="wrap" justifyContent="space-between" my="15px">
                                    <Box>
                                        <Typography sx={{ fontSize: { xs: "13px", md: "18px" } }} color="#1A1824" fontWeight="500">Sweet Dishes</Typography>
                                        <Typography sx={{ fontSize: { xs: "13px", md: "16px" } }} color="#9EA3AE" fontWeight="400">All Dishes</Typography>
                                    </Box>
                                    <Box display="flex" flexWrap="wrap">
                                        <Typography sx={{ fontSize: { xs: "13px", md: "18px" } }} color="#1A1824" fontWeight="600">1</Typography>
                                        <Typography sx={{ ml: "100px", fontSize: { xs: "13px", md: "18px" } }} color="#1A1824" fontWeight="500">$10.00</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ mx: { md: 2 } }} mt="50px" display="flex" flexWrap="wrap" justifyContent="space-between">
                            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                                <Box border="2px solid #E1E1E6" borderRadius="8px" p="15px 50px" textAlign="center">
                                    <CiReceipt fontSize="24px" color="#2B817B" />
                                    <Typography sx={{ fontSize: { xs: "13px", md: "16px" } }} color="#2B817B" fontWeight="600">Print reciept</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box display="flex" flexWrap="wrap" sx={{ mt: { xs: "5px", md: "10px" } }}>
                                    <Typography sx={{ verticalAlign: "top", fontSize: { xs: "13px", md: "16px" } }} color="#9EA3AE" fontWeight="400">Subtotal :</Typography>
                                    <Typography sx={{ verticalAlign: "top", ml: "50px", fontSize: { xs: "13px", md: "16px" } }} color="#9EA3AE" fontWeight="500">$100.00</Typography>
                                </Box>
                                <Box display="flex" flexWrap="wrap" sx={{ mt: { xs: "5px", md: "10px" } }}>
                                    <Typography sx={{ verticalAlign: "top", fontSize: { xs: "13px", md: "16px" } }} color="#9EA3AE" fontWeight="400">Subtotal :</Typography>
                                    <Typography sx={{ verticalAlign: "top", ml: "50px", fontSize: { xs: "13px", md: "16px" } }} color="#9EA3AE" fontWeight="500">$100.00</Typography>
                                </Box>
                                <Box display="flex" flexWrap="wrap" sx={{ mt: { xs: "5px", md: "10px" } }}>
                                    <Typography sx={{ verticalAlign: "top", fontSize: { xs: "16px", md: "18px" } }} color="#1A1824" fontWeight="600">Total :</Typography>
                                    <Typography sx={{ verticalAlign: "top", ml: "65px", fontSize: { xs: "16px", md: "18px" } }} color="#1A1824" fontWeight="600">$100.00</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


            {/* drawer codding start */}

            <div>
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {
                                !showScheduleMenuListItemDetail && (
                                    <DrawerHeader>
                                        <IconButton onClick={toggleDrawer(anchor, false)}>
                                            <CloseIcon sx={{ color: "#E75C62" }} />
                                        </IconButton>
                                        <Box mx="auto" mt="15px" textAlign="center">
                                            <Typography sx={{ color: "#1A1824", fontWeight: "600", fontSize: { xs: "16px", md: "20px" } }}>
                                                Schedule menu</Typography>
                                            <Typography sx={{ mt: "5px", color: "#9EA3AE", fontWeight: "400", fontSize: { xs: "13px", md: "14px" } }}>
                                                Details of the dishes to be prepared</Typography>
                                        </Box>
                                    </DrawerHeader>
                                )
                            }

                            {
                                showDishDetail && (
                                    <DrawerHeader>
                                        <IconButton onClick={() => setShowDishDetail(false)}>
                                            <CloseIcon sx={{ color: "#E75C62" }} />
                                        </IconButton>
                                        <Box mx="auto" mt="15px" textAlign="center">
                                            <Typography sx={{ color: "#1A1824", fontWeight: "600", fontSize: { xs: "16px", md: "20px" } }}>Detail dishes</Typography>
                                        </Box>
                                    </DrawerHeader>
                                )
                            }

                            {list(anchor)}

                        </Drawer>
                    </React.Fragment>
                ))}
            </div>

        </>
    )
}

export default DetailSubscription