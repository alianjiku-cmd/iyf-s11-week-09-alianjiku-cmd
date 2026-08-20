 alianjiku-cmd-patch-1
# Week 9: React Advanced — Community Hub

## Author
- **Name:** Alice Wanjiku
- **GitHub:** [@alianjiku-cmd](https://github.com/alianjiku-cmd)
- **Date:** August 17, 2026

## Project Description
This project demonstrates advanced React patterns using the `use Effects` hook, data fetching, event listeners, local Storage sync, and cleanup functions.  
The deliverable is a **Community Hub app** with routing and API integration, styled with Tail  wind CSS, and built as a multi‑page application.

## Technologies Used
- React (with Hooks)
- JavaScript (ES6+)
- HTML5
- CSS3 / Tail wind CSS
- Node.js (for backend API)
- Git & GitHub (version control)

## Features
- **Exercise 1: Counter**  
  Demonstrates multiple `use Effects` scenarios (on mount, on update, with cleanup).
- **Exercise 2: User Profile**  
  Fetches user data from an API when `user Id` changes.
- **Exercise 2: Window Size**  
  Tracks browser window resize events with cleanup.
- **Exercise 2: Theme Toggle**  
  Syncs theme preference with local Storage and updates the DOM.
- **Routing (Lesson 18)**  
  Adds multiple pages (Home, Profile, Settings) using React Router.
- **Styling (Lesson 18)**  
  Applies Tail wind CSS for responsive design and consistent UI.
**Folder Structure**
week-09-react-advanced/
│
├── src/
│   ├── components/
│   │   ├── Counter.js          # Task 17.1 Exercise 1
│   │   ├── UserProfile.js      # Task 17.1 Exercise 2 (Pattern 1)
│   │   ├── WindowSize.js       # Task 17.1 Exercise 2 (Pattern 2)
│   │   ├── ThemeToggle.js      # Task 17.1 Exercise 2 (Pattern 3)
│   │   ├── PostList.js         # Task 17.2 Exercise 1
│   │   └── PostCard.js         # Helper for PostList
│   │
│   ├── hooks/
│   │   └── useFetch.js         # Task 17.2 Exercise 2
│   │
│   ├── App.js                  # Swap imports per exercise
│   └── index.js                # React entry point
│
├── README.md                   # Assignment documentation
└── Package.js

## How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/alianjiku-cmd/iyf-s11-week-09-alianjiku-cmd.git
   cd iyf-s11-week-09-alianjiku-cmd
   
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Week 9 React Advanced Assignment
Repository: iyf-s11-week-09-alianjiku-cmd
Author: alianjiku-cmd

This repository contains my Week 9 React Advanced exercises, including components, hooks, and routing patterns.

 0d1b765a167ec529fe01fc29cc29f04378894d71
 main
