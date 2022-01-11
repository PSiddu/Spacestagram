import React from "react";
import { Box, Heading, Flex, Text, Stack, Image } from "@chakra-ui/react";
import { Switch, useColorMode } from "@chakra-ui/react";

import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import spacestagramBlack from "../assets/spacestagramBlack.png";
import spacestagramWhite from "../assets/spacestagramWhite.png";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "./Header.css";

// Header component
const Header = (props, setStartDate) => {
  // drop down menu for mobile
  const [show, setShow] = React.useState(false);
  // to toggle between lightmode and dark mode
  const { colorMode, toggleColorMode } = useColorMode();

  // toggle drop down menu
  const toggleMenu = () => setShow(!show);

  const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
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
      <Flex align="left" mr={5} marginLeft={["none", "none", "15%", "15%"]}>
        <LinkBox color={colorMode === "light" ? "black" : "whiteDark"}>
          <Heading as="h1" letterSpacing="0px">
            <LinkOverlay href="/">
              <Image
                src={
                  colorMode === "light" ? spacestagramBlack : spacestagramWhite
                }
                width={150}
              ></Image>
            </LinkOverlay>
          </Heading>
        </LinkBox>
      </Flex>
      {/* Search */}

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
              align="center"
              bg="white"
              marginRight={["0px", "0px", "0px", "15%"]}
            >
              <DayPickerInput
                onDayChange={(date) =>
                  props.setStartDate(date.toISOString().slice(0, 10))
                }
                borderColor={colorMode === "light" ? "#dbdbdb" : "#3f3f40"}
                borderWidth="1px"
                placeholder="YYYY-MM-DD"
              />
            </Flex>
          </Flex>

          {/* Switch */}
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
