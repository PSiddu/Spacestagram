import React from "react";
import { Box, Flex, Image, useColorMode, Button } from "@chakra-ui/react";
import { useState } from "react";
import Heart from "react-animated-heart";

const SoloPost = (item) => {
  const { colorMode } = useColorMode();
  const [isClick, setClick] = useState(false);
  const [textToggle, setTextToggle] = useState(true);

  const ReadMore = () => {
    const displayedString = textToggle
      ? item.explanation.slice(0, 200)
      : item.explanation;

    return (
      <p
        style={{
          textAlign: "left",
          width: "100%",
          fontFamily: "Roboto",
          paddingLeft: "2%",
          paddingRight: "2%",
        }}
      >
        {displayedString}
        {textToggle ? "... " : ""}
        {textToggle ? (
          <Button
            variant="link"
            onClick={() => setTextToggle(!textToggle)}
            textColor={"blue.400"}
          >
            Read More
          </Button>
        ) : (
          ""
        )}
      </p>
    );
  };

  return (
    <Flex
      direction="column"
      align={"center"}
      textAlign={"left"}
      width={["100%", "100%", "50%", "50%"]}
      paddingBottom="3%"
      marginLeft={["none", "none", "25%", "25%"]}
    >
      <Box
        padding="0.7rem"
        borderColor={colorMode === "light" ? "#dbdbdb" : "#3f3f40"}
        borderWidth="1px"
        width="100%"
        align={"center"}
        bg={colorMode === "light" ? "#ffffff" : "#282424"}
      >
        <h1
          style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          {item.title}
        </h1>
      </Box>

      {item.media_type === "image" ? (
        <Box
          bg="black"
          width={"100%"}
          align={"center"}
          borderColor={colorMode === "light" ? "#dbdbdb" : "#3f3f40"}
          borderWidth="1px"
        >
          <Image src={item.url} alt={item.title}></Image>
        </Box>
      ) : (
        <iframe
          title={item.title}
          src={item.url}
          allowFullScreen
          width="100%"
          height={"500rem"}
        />
      )}

      <Box
        padding="0.7rem"
        borderColor={colorMode === "light" ? "#dbdbdb" : "#3f3f40"}
        borderWidth="1px"
        width="100%"
        align={"center"}
        bg={colorMode === "light" ? "#ffffff" : "#282424"}
      >
        <Flex justifyContent={"space-between"}>
          <Flex marginBottom={"-2%"} marginTop={"-5%"} marginLeft={"-3%"}>
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
          </Flex>
          <p
            style={{
              fontFamily: "Roboto",
              paddingRight: "3%",
            }}
          >
            {item.date}
          </p>
        </Flex>

        {/* </Circle> */}

        <ReadMore />
        {"\n"}
      </Box>
    </Flex>
  );
};

export default SoloPost;
