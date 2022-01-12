// imports
import React from "react";
import { Box, Heading, Flex, Text, Stack, Image } from "@chakra-ui/react";
import { Switch, useColorMode } from "@chakra-ui/react";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import spacestagramBlack from "../assets/spacestagramBlack.png";
import spacestagramWhite from "../assets/spacestagramWhite.png";
// import DayPickerInput from "react-day-picker/DayPickerInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Header.scss";

// This is the header component of the app
const Header = (props, startDate, setStartDate) => {
  // drop down menu state for mobile
  const [show, setShow] = React.useState(false);

  // toggle between lightmode and dark mode
  const { colorMode, toggleColorMode } = useColorMode();

  // toggle drop down menu
  const toggleMenu = () => setShow(!show);

  // icons for sandwich menu
  const CloseIcon = () => (
    <svg
      width="24"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      alt="Close Icon"
    >
      <title>Close</title>
      <path
        fill={colorMode === "light" ? "black" : "white"}
        d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
      />
    </svg>
  );

  const MenuIcon = () => (
    <svg
      width="24px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill={colorMode === "light" ? "black" : "white"}
      alt="Menu Icon"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      marginBottom="5%"
      bg={colorMode === "light" ? "#ffffff" : "#282424"}
      width="100%"
      {...props}
    >
      {/* Spacestagram logo, light and dark version */}
      <Flex align="left" mr={5} marginLeft={["none", "none", "15%", "15%"]}>
        <LinkBox color={colorMode === "light" ? "black" : "whiteDark"}>
          <Heading as="h1" letterSpacing="0px">
            <LinkOverlay href="/">
              <Image
                src={
                  colorMode === "light" ? spacestagramBlack : spacestagramWhite
                }
                alt="Website Logo"
                width={150}
              ></Image>
            </LinkOverlay>
          </Heading>
        </LinkBox>
      </Flex>

      {/* Search Field */}
      <Box
        display={["block", "block", "block", "block", "none"]}
        onClick={toggleMenu}
      >
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>
      <Box
        display={[
          show ? "block" : "none",
          show ? "block" : "none",
          show ? "block" : "none",
          show ? "block" : "none",
          "block",
        ]}
        flexBasis={["100%", "100%", "100%", "100%", "auto", "auto"]}
        paddingRight={"15%"}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "column", "column", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <Flex>
            <Text fontFamily={"Roboto"} fontWeight={"bold"}>
              Browse posts starting from:{" "}
            </Text>
            <Flex
              textColor="black"
              borderColor={colorMode === "light" ? "#dbdbdb" : "#3f3f40"}
              borderWidth="2px"
              borderRadius={["0px", "0px", "0px", "12px"]}
              align="center"
              bg="white"
              marginRight={["0px", "0px", "0px", "15%"]}
              width={("auto", "auto", "auto", "100%")}
            >
              {/* Note: setStartDate is passed in as a prop from the parent component,
                        as the parent component needs the updated startDate state variable
                        in order to send it to NasaData. Additionally, the component does not
                        let you pick dates in the future, as that would break the API call.
                        (Since future data does not exist.)  */}
              <DatePicker
                onChange={(date) => props.setStartDate(date)}
                selected={props.startDate}
                placeholderText={"YYYY-MM-DD"}
                dateFormat={"yyyy-MM-dd"}
                maxDate={new Date()}
              />
            </Flex>
          </Flex>

          {/* Theme Switch */}
          <Stack direction="row">
            <Text
              fontFamily={"Roboto"}
              fontWeight={"bold"}
              paddingTop={["30px", "30px", "30px", "0px"]}
            >
              Toggle Theme:
            </Text>
            <Switch
              onChange={toggleColorMode}
              paddingTop={["30px", "30px", "30px", "0px"]}
              paddingLeft={["50%", "0px", "0px", "5px"]}
              fontSize="18px"
            ></Switch>
            <Flex paddingTop={["30px", "30px", "30px", "0px"]}></Flex>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
