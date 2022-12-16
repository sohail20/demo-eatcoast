import { useState } from "react";
import { Box, Avatar, Stack } from "@mui/material";
import { CenteredBoxContainer, FlexBoxContainer } from "components/Containers";
import CloseHeader from "components/Header/CloseHeader";
import { H3Typo, LightTitle } from "components/Typography";
import CustomIconButton from "components/Button/CustomIconButton";
import CustomInput from "components/Inputs/CustomInput";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

// var month = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

const Chat = ({ title = "On Delivery", handleClose }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      Sept132021: [
        {
          isMe: false,
          message:
            "I am on the way prepare food packages to be brought to make it easier for the driver",
          date: "Today, Sept 13, 2021",
          isAutomated: true,
        },
      ],
    },
  ]);

  const handleUpdateChatMessage = (newChat) => {
    const tmpArray = chat;
    tmpArray[0]["Sept132021"] = [
      ...tmpArray[0]["Sept132021"],
      { isMe: true, date: "Today, Sept 13, 2021", message: newChat },
    ];
    setChat([...tmpArray]);

    setTimeout(() => {
      tmpArray[0]["Sept132021"] = [
        ...tmpArray[0]["Sept132021"],
        {
          isMe: false,
          date: "Today, Sept 13, 2021",
          message: "Hello their",
          isAutomated: true,
        },
      ];
      setChat([...tmpArray]);
    }, 3000);
  };

  return (
    <>
      <Box position={"fixed"} p={2} backgroundColor={"#fff"} width={"100%"}>
        <CloseHeader title={title} variant="back" handleClose={handleClose} />

        <FlexBoxContainer style={{ width: "94%" }}>
          <Box display="flex" gap={2}>
            <Avatar
              alt="Remy Sharp"
              src="https://www.w3schools.com/howto/img_avatar.png"
              sx={{ width: 56, height: 56 }}
            />
            <Box display="flex" alignItems="center" justifyContent="center">
              <Box>
                <LightTitle>DEC - 12345</LightTitle>
                <H3Typo>Philip Bodogeza</H3Typo>
              </Box>
            </Box>
          </Box>

          <CustomIconButton
            icon={<LocalPhoneIcon style={{ color: "#2B817B" }} />}
            variant={"outlined"}
          />
        </FlexBoxContainer>
      </Box>

      <Box p={2}>
        <Stack spacing={2} mt={"141px"} mb={"38px"}>
          {chat &&
            chat.map((e, index) => (
              <Messages
                data={e[Object.keys(e)[0]]}
                dateInfo={Object.keys(e)[0]}
              />
            ))}
        </Stack>
      </Box>

      <Box
        display="flex"
        position="fixed"
        bottom={0}
        backgroundColor={"#fff"}
        width={"100%"}
        p={"12px"}
        gap={2}
      >
        <CustomIconButton icon={<AddIcon style={{ color: "#2B817B" }} />} />
        <CustomInput
          placeholder="Type some message"
          style={{ width: "100%" }}
          value={message}
          width={"80%"}
          onChange={(e) => setMessage(e.target.value)}
        />
        <CustomIconButton
          label="Send"
          icon={<SendIcon />}
          variant={"contained"}
          onClick={() => handleUpdateChatMessage(message)}
        />
      </Box>
    </>
  );
};

const Messages = ({ data, dateInfo }) => {
  //For later use
  //   const dateString = `${
  //     month[new Date().getMonth()]
  //   }${new Date().getDate()}${new Date().getFullYear()}`;

  return (
    <>
      <CenteredBoxContainer style={{ marginBottom: "15px" }}>
        <Box
          style={{
            background: "#E1E1E6",
            borderRadius: "14px",
            padding: "0px 10px ",
          }}
        >
          <LightTitle>{dateInfo}</LightTitle>
        </Box>
      </CenteredBoxContainer>
      {data &&
        data.map(({ isMe, message, isAutomated }) => {
          if (message !== "")
            return (
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={isMe ? "end" : "start"}
              >
                <Box
                  style={{
                    width: "454px",
                    height: "96px",
                    background: "#E1E1E6",
                    borderRadius: "4px",
                    padding: 10,
                  }}
                >
                  <H3Typo>{message}</H3Typo>

                  {isAutomated && (
                    <LightTitle>this is an automatic message</LightTitle>
                  )}
                </Box>
              </Box>
            );
        })}
    </>
  );
};

export default Chat;
