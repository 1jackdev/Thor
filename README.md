# Cool With Whatever 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Before Starting: 
- You will need to download postgresql
  - `brew install postgresql`
- In order to run this app, you must also download the backend repo, [Odin](https://github.com/1jackdev/Odin)
  - In Odin, run this script `psql < db.sql`

## Available Scripts

In the Thor (frontend) project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


In the Odin (backend) project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## Description

Cool With Whatever uses the Yelp Business Search API to gather information about nearby restaurants/cafes/bars. 

To prevent the inevitable Choice Paradox, it limits the options and information about the potential destinations. For regular users (no account), CWW acts as a quick decision-maker, finding two relevant options and providing directions via Google Maps and Apple Maps. 

For logged-in users, CWW keeps track of the option that was selected and prevents that option from showing up in future searches. Additionally, the app provides the user with an ordered list of categories that the user tends to favor (User Preferences). Using this information, the recommendation algorithm returns (to users with enough selection data) 1 option that closely aligns with their preferred location categories and another option that is as close to “something new” as possible.
