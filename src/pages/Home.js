import React from "react";
import { Flex, useColorMode, Button } from "@chakra-ui/react";
import Header from "../components/Header";
import NasaData from "../components/NasaData";
import { useEffect, useState } from "react";

export default function Landing() {
  const { colorMode } = useColorMode();
  const [startDate, setStartDate] = useState(null);

  const scrollfunc = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Flex
      direction="column"
      align="center"
      m="0 auto"
      bg={colorMode === "light" ? "#fafafa" : "#18191b"}
    >
      <Header
        position="sticky"
        top={0}
        zIndex="2"
        // boxShadow="lg"
        marginTop={0}
        borderBottomColor={colorMode === "light" ? "#dbdbdb" : "#3f3f40"}
        borderBottomWidth="2px"
        setStartDate={setStartDate}
        //paddingTop="0"
      />
      <Flex>
        <NasaData startDate={startDate} />
      </Flex>
      <Button
        fontFamily={"Roboto"}
        fontWeight={"bold"}
        variant="link"
        textColor={"blue.400"}
        onClick={scrollfunc}
        marginBottom={"1%"}
      >
        Return to top
      </Button>
    </Flex>
  );
}
