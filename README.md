# CuddlyNest Weather App

Welcome to my CuddlyNest Candidate Assignment! This project is a weather web application built to showcase skills in front-end development, architecture, performance optimization, and user experience.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Features](#features)
4. [User Stories](#user-stories)
5. [Getting Started](#getting-started)
6. [Tech Stack](#tech-stack)
7. [Contacts](#contacts)

---

## Project Overview

This project is a weather application that fetches weather data from:

https://us-central1-mobile-assignment-server.cloudfunctions.net/weather



The application allows users to:

- View all cities available in the API.
- Sort cities alphabetically.
- Refresh weather data.
- View detailed weather results for each city.
- Hide/unhide cities with preferences remembered after page reload.
- Display temperatures in Celsius in chronological order.

The project is built with performance, maintainability, and user experience in mind.

---

## Architecture

- **Framework:** React + TypeScript
- **Project Bootstrap:** Vite (fast and optimized development environment)
- **Routing:** `react-router-dom` with `Outlet` for nested routing and detail pages
- **Data Fetching:** React Query for server caching and synchronization
- **State Management:** React hooks and **custom hooks** for API and state handling
- **Server Folder:** API logic is separated in a dedicated `server` folder
- **Styling:** SCSS with **CSS Modules**
- **Offline / Persistence:** LocalStorage used to remember hidden/unhidden city choices
- **Error Handling:** Graceful handling for no internet or API errors
- **Unit Testing:** Vitest used for unit tests of critical components
- **Server Execution:** `node server.js` with **nodemon** for hot-reload during development

**Reasoning for choices:**  
React + TypeScript provides type safety and scalability. Vite ensures fast front-end dev experience. SCSS modules allow modular, maintainable styles. React Query simplifies server state management. Custom hooks and server folder structure improve code clarity and separation of concerns.

---

## Features

- Home screen displaying all available cities sorted alphabetically
- Refresh button for updating weather data
- Detail screen for each city accessible via direct URL
- Temperature conversion to Celsius:
  - Celsius = Kelvin - 273.15
  - Celsius = (Fahrenheit - 32) / 1.8
- Chronological display of temperatures
- Hide/unhide cities with persistent preferences
- Offline handling / graceful error messages
- Custom hooks for clean data fetching
- React Query caching and synchronization
- SCSS modules for component-level styling
- Outlet for nested routing

---

## User Stories

### Completed

1. **Reviewer:** Application fetches weather data from API ✅  
2. **User:** Home screen shows all cities ✅  
3. **User:** Cities are sorted alphabetically ✅  
4. **User:** Users can refresh data ✅  
5. **User:** Clicking a city opens a detail screen accessible via URL ✅  
6. **User:** Temperatures displayed in Celsius ✅  
7. **User:** Temperatures displayed in chronological order ✅  
8. **User:** Hide/unhide cities with persistent preference ✅  

### Not Completed / Comments

- Unit tests are minimal; only critical components covered 🟡  

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Installation


git clone <REPO_URL>
cd cuddlynest-weather-app
npm install

Running the Front-End
npm run dev
Runs Vite dev server at http://localhost:5173 (default Vite port)

Running the Server
node server.js
# or for development with hot reload
nodemon server.js
Building for Production

npm run build
Tech Stack
React 18 + TypeScript

Vite

React Router (Outlet for nested routing)

React Query

SCSS / CSS Modules

LocalStorage (caching for hidden cities)

Vitest (unit testing)

Node.js backend (server folder)

Nodemon for server development

Contacts
Developer: Fidan Məmmədova

GitHub: github.com/FidanMemmedova
