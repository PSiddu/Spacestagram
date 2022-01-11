// imports
import React from "react";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SoloPost from "../components/SoloPost";

// This is the component that actually gets the necessary data from the NASA
//   API and maps it into individual posts.
const NasaData = (startDate) => {
  // Holds the JSON result from the API call
  const [result, setResult] = useState(null);

  // This loading state is set to true while waiting for the API result to arrive
  const [load, setLoad] = useState(false);

  // this today variable is set as the end_date value for date-range API calls
  // var today = new Date().toISOString().slice(0, 10);

  // This useEffect hook is where the NASA API is called
  useEffect(() => {
    // apikey is stored as an Environment variable for security reasons
    const apikey = process.env.REACT_APP_API_KEY;

    // Another today variable is also included here to disable the warning
    //   that the hook relies on this variable while it is not declared
    //   inside the hook.
    var today = new Date().toISOString().slice(0, 10);

    // calling the asynchronous function that is about to be defined
    posts();

    // this async function will perform the API call
    async function posts() {
      // the result of the API call will tentatively be stored in this res variable
      let res = "";

      // if the user has selected a date, then retrieve all posts from that day
      //   to the present.
      if (startDate.startDate != null) {
        // load state is set to true
        setLoad(true);
        res = await fetch(
          `https://api.nasa.gov/planetary/apod?start_date=${startDate.startDate
            .toISOString()
            .slice(0, 10)}&end_date=${today}&api_key=${apikey}`
        );
      }

      // else, if the site has just loaded and user has not selected a date, then 10
      //   posts from random dates will be retrieved.
      else {
        // load state is set to true
        setLoad(true);
        res = await fetch(
          `https://api.nasa.gov/planetary/apod?count=${10}&api_key=${apikey}`
        );
      }

      // now that API call is over, load state is set to false
      setLoad(false);

      // the .json() function is applied to res, and is then stored in the data variable.
      const data = await res.json();

      // the result state is updated with the fetched API data
      setResult(data);
    }
    // this useEffect hook needs to be rerendered every time the startDate state is changed,
    //   since a new API call for new posts needs to be done. So, the variable name is added here.
  }, [startDate.startDate]);

  // this condition makes it so that while the page is first being loaded up, there is a
  //   load animation being displayed.
  if (!result) {
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
      <div>
        {/* If the loading state is false, then proceed to map the results of the
              API call to individual posts via the SoloPost component. */}
        {!load ? (
          result.map((item) => <SoloPost {...item} />)
        ) : (
          // Otherwise, if the loading state is true, then display the same loading
          //   animation as before.
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            marginBottom={"500rem"}
            position={"fixed"}
          />
        )}
      </div>
    </div>
  );
};

export default NasaData;
