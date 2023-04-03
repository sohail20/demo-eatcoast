import {
    Box,
    Button,
    FormControl,
    InputLabel,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Select,
} from "@mui/material";
import React from "react";
import Charts from "react-apexcharts";
import { BiCheckCircle } from "react-icons/bi";
import "./SalesChartCss.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomDropdown from "components/Inputs/CustomDropdown";

export const SalesChart = ({ salesChartData = [0] }) => {
    var options = {
        title: {
            text: "Sales Charts",
            align: "left",
            style: {
                fontFamily: "Outfit",
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "26px",
            },
        },
        markers: {
            colors: "#6A82CF",
            strokeColors: "#6A82CF",
            strokeWidth: 0,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
        },
        chart: {
            height: 380,
            width: "100%",
            type: "line",
            zoom: false,
            toolbar: {
                tools: {
                    download: false, //disable burgerMenu
                },
            },
        },
        // to set thickness of chart line
        stroke: {
            show: true,
            curve: "straight",
            width: 1.5,
        },
        //for chart shoswing tooltip
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "8px",
            },
            background: {
                enabled: true,
                foreColor: "#6A82CF",
                padding: 0,
                borderRadius: 10,
                borderWidth: 0,
                borderColor: "#6A82CF",
                opacity: 1,
            },
            textAnchor: "middle",
            offsetX: 0,
            offsetY: 0,
        },
        series: [
            {
                name: "Order",
                data: salesChartData,
                style: {
                    fontSize: "8px ",
                    fontFamily: "Outfit",
                    background: "red",
                },
            },
        ],
        tooltip: {
            style: {
                background: "#2F549D",
            },
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
                return "<ul>" + "<li > " + data + "<b> Order </b> </li>" + "</ul>";
            },
        },
        colors: [
            function ({ value, seriesIndex, dataPointIndex, w }) {
                if (dataPointIndex) {
                    return "#6A82CF";
                } else {
                    return "#6A82CF";
                }
            },
        ],
    };

    const [menu, setMenu] = React.useState("month");

    return (
        <Box padding={2}>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Box></Box>
                <CustomDropdown
                    value={menu}
                    items={[
                        { label: "Daily", value: "daily" },
                        { label: "This Month", value: "month" },
                      ]}
                    handleOnChange={(e) => {
                        setMenu(e)
                    }}
                />
            </Box>
            <Charts
                options={options}
                series={options.series}
                type="line"
                width="100%"
                height="390px"
            />
        </Box>
    );
};
