# Spacestagram

Spacestagram is an app that shares photos from NASA’s Astronomy Picture of the Day API. Created for the Shopify Summer 2022 Front-End Challenge.

Live Version: https://spacestagram-siddup.herokuapp.com/

## How to Run

1. Clone this repo, then enter this repo via your terminal and run `npm install`
2. Create an environment file called `.env` and place it in the root of the clone directory (next to `package-lock.json`)
3. Go to `https://api.nasa.gov` to get your free API key.
4. In the `.env` file, add `REACT_APP_API_KEY=YOUR_KEY`, replacing `YOUR_KEY` with the key you got from step 3.
5. Run `npm start` and view the site at `http://localhost:3000/`


## Technology and Implementation

This app was made using React, JavaScript and the Chakra UI component library. Various other npm library components were used, such as the date-picker and the animated heart.

The app loads in with 10 posts in the feed from randomly selected dates. Posts consist of photos and sometimes videos. The user can change the color theme of the site according to their preferences. They can also select a date from a date-picker component in the Header, and get all of the posts between that date and today's date (inclusive) in their feed.

## Features

- User Interface based on Instagram
- Animated Button for liking posts
- A date-picker with which a user can browse all of the posts starting from a specific date (note: the further you go back, the longer it takes to return all of the posts, infinite scroll can be implemented in the future to mitigate this)
- Fully responsive site that can be ran on mobile devices
- Header items get added to a dropdown menu in smaller screen sizes
- A "Read More" component for the picture descriptions so that posts take up less space
- A Loading state/animation while awaiting NASA API data
- A Switch component to toggle between a light theme and a dark theme for the app UI
- Link at the bottom of page to take user back to the top via scroll animation

## Accesibility

I made a conscious effort to follow accesibility and semantic guidelines throughout this project, monitoring these attributes via Chrome's Lighthouse Accesibility Auditing.

![image](https://user-images.githubusercontent.com/36796876/148934047-cddf359e-b38a-4306-bc7c-2f576b20db6b.png)
