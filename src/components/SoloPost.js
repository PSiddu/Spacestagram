// imports
import React from "react";
import { Box, Flex, Image, useColorMode, Button } from "@chakra-ui/react";
import { useState } from "react";
import Heart from "react-animated-heart";

// This is the component that the map function in NasaData maps the API data to
//   to create individual posts.
const SoloPost = (item) => {
  // toggle between lightmode and dark mode
  const { colorMode } = useColorMode();

  // selected state of the like button for a particular "post"
  const [isClick, setClick] = useState(false);

  // toggle the "read more" functionality of the "post" descriptions
  const [textToggle, setTextToggle] = useState(true);

  // function that handles the "read more" functionality
  const ReadMore = () => {
    // the first 200 characters only are showed before the read more appears
    const displayedString = textToggle
      ? item.explanation.slice(0, 200)
      : item.explanation;

    // note: just like in Instagram's design, once "read more" is clicked,
    //       description cannot be shrunk back.
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

  // returning the actual post component
  return (
    <Flex
      direction="column"
      align={"center"}
      textAlign={"left"}
      width={["100%", "100%", "50%", "50%"]}
      paddingBottom="3%"
      marginLeft={["none", "none", "25%", "25%"]}
    >
      {/* The title on top of posts */}
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

      {/* Upon noticing that some of the Astronomy pictures of the day were actually
            videos, I added this ternary operator to change the component to an iframe
            for cases where the post is a video. */}
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

      {/* The like button and date are here */}
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

        {/* The previously defined ReadMore component for the description is added here */}
        <ReadMore />
        {"\n"}
      </Box>
    </Flex>
  );
};

export default SoloPost;
