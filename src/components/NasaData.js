import React from "react";
import {
  Box,
  Flex,
  Image,
  useColorMode,
  Circle,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SoloPost from "../components/SoloPost";
import Heart from "react-animated-heart";

const NasaData = (startDate) => {
  const { colorMode } = useColorMode();
  const [yeet, setYeet] = useState(null);
  const [isClick, setClick] = useState([false]);
  const [load, setLoad] = useState(false);

  // yyyy-mm-dd
  var today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    pics();
    async function pics() {
      let res = "";
      if (startDate.startDate > today) {
        setLoad(true);
        res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=sYE5edvQCPrsrbEAHBvgxTQkMF1gr6QHvmrswFEy`
        );
      } else if (startDate.startDate != null) {
        setLoad(true);
        res = await fetch(
          `https://api.nasa.gov/planetary/apod?start_date=${startDate.startDate}&end_date=${today}&api_key=sYE5edvQCPrsrbEAHBvgxTQkMF1gr6QHvmrswFEy`
        );
      } else {
        setLoad(true);
        res = await fetch(
          `https://api.nasa.gov/planetary/apod?count=${10}&api_key=sYE5edvQCPrsrbEAHBvgxTQkMF1gr6QHvmrswFEy`
        );
      }
      setLoad(false);
      //
      const data = await res.json();
      setYeet(data);
    }
  }, [startDate.startDate]);

  if (!yeet) {
    return (
      <div>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          marginBottom={"500rem"}
        />
      </div>
    );
  }

  const soloPost = (item) => {
    return (
      <Flex
        direction="column"
        align={"center"}
        textAlign={"left"}
        width="50%"
        marginTop="10%"
        marginLeft="10%"
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

        <Image src={item.url} alt={item.title}></Image>

        <Box
          padding="0.7rem"
          borderColor={colorMode === "light" ? "#dbdbdb" : "#3f3f40"}
          borderWidth="1px"
          width="100%"
          align={"center"}
          bg={colorMode === "light" ? "#ffffff" : "#282424"}
        >
          <Flex justify="space-between">
            <Circle
              //bg="tomato"
              borderColor={colorMode === "light" ? "#dbdbdb" : "#3f3f40"}
              borderWidth="2px"
            >
              <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
            </Circle>
            <Flex>
              <h1
                style={{
                  fontFamily: "Roboto",
                  // fontWeight: "bold",
                  // fontSize: "18px",
                }}
              >
                {item.date}
              </h1>
            </Flex>
          </Flex>
          <p
            style={{
              textAlign: "left",
            }}
          >
            {item.explanation}
          </p>
        </Box>
      </Flex>
    );
  };

  return (
    <div>
      {startDate.startDate > today ? (
        <Heading marginBottom={"500rem"} fontFamily={"Roboto"}>
          You have selected a date in the future. Please try another search.
        </Heading>
      ) : (
        <div>
          {!load ? (
            yeet.map((item) => <SoloPost {...item} />)
          ) : (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              marginBottom={"500rem"}
            />
          )}
        </div>
      )}
      {/* {yeet.map(soloPost)} */}
    </div>
  );
};

export default NasaData;
