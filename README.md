# Star Wars App

This application provides a user-friendly interface to browse through planets in the Star Wars universe using the Star Wars API (SWAPI). Users can view a list of all planets, search for specific planets, and explore detailed information about each planet's residents.

## Features

- **List All Planets**: Displays all the planets retrieved from the SWAPI.
- **Search Functionality**: Allows users to search through the list of planets without additional API calls.
- **Planet Details**: On clicking a planet, the app displays a list of residents on that planet.
- **Resident Details**: Users can view detailed information about each resident.
- **Responsive Design**: Ensures the app works well on both desktops and mobile devices.
- **Breadcrumb Navigation**: Enhances user experience by displaying an interactive breadcrumb navigation bar.

## Built With

- **React**: Used for building the user interface.
- **Axios**: Handles HTTP requests to the Star Wars API.
- **Tailwind CSS**: Provides utility-first CSS framework for styling.
- **React Router**: Manages navigation between pages.
- **Zustand**: Simplifies state management across the app.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```bash
node.js
npm
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

