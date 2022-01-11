// imports
import React from "react";
import { Flex, useColorMode, Button } from "@chakra-ui/react";
import Header from "../components/Header";
import NasaData from "../components/NasaData";
import { useState } from "react";

// This is the main component of the application, where everything is put together.
export default function Landing() {
  // toggle between lightmode and dark mode
  const { colorMode } = useColorMode();

  // The way that this startDate state variable is used is that the setStartDate
  //   function is passed as a prop to the Header, which contains a date picker component.
  //   There, the user will select a date to start loading posts from. That date will then
  //   be updated in the startDate variable in this file. That variable will then be passed
  //   as a prop to NasaData, where it will be used as a part of the ensuing API call.
  const [startDate, setStartDate] = useState(null);

  // at the bottom of the page, there is a link that will take you back to the top for
  //   convenience purposes.
  const scrollfunc = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    // Contains the whole page
    <Flex
      direction="column"
      align="center"
      m="0 auto"
      bg={colorMode === "light" ? "#fafafa" : "#18191b"}
    >
      {/* Header component is added here */}
      <Header
        position="sticky"
        top={0}
        zIndex="2"
        marginTop={0}
        borderBottomColor={colorMode === "light" ? "#dbdbdb" : "#3f3f40"}
        borderBottomWidth="2px"
        startDate={startDate}
        setStartDate={setStartDate}
      />
      {/* NasaData is added here */}
      <Flex>
        <NasaData startDate={startDate} />
      </Flex>
      {/* Return to top link is added here */}
      <Button
        fontFamily={"Roboto"}
        fontWeight={"bold"}
        variant="link"
        textColor={"blue.600"}
        onClick={scrollfunc}
        marginTop="10%"
        marginBottom="1%"
      >
        Return to top
      </Button>
    </Flex>
  );
}
