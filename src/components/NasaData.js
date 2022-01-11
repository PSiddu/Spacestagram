import React from "react";
import { Spinner, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SoloPost from "../components/SoloPost";

const NasaData = (startDate) => {
  const [yeet, setYeet] = useState(null);
  const [load, setLoad] = useState(false);

  // yyyy-mm-dd
  var today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    const apikey = process.env.REACT_APP_API_KEY;

    // yyyy-mm-dd
    var today = new Date().toISOString().slice(0, 10);

    pics();
    async function pics() {
      let res = "";
      if (startDate.startDate > today) {
        setLoad(true);
        res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apikey}`
        );
      } else if (startDate.startDate != null) {
        setLoad(true);
        res = await fetch(
          `https://api.nasa.gov/planetary/apod?start_date=${startDate.startDate}&end_date=${today}&api_key=${apikey}`
        );
      } else {
        setLoad(true);
        res = await fetch(
          `https://api.nasa.gov/planetary/apod?count=${10}&api_key=${apikey}`
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
    </div>
  );
};

export default NasaData;
