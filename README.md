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
