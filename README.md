[![Build Status](https://travis-ci.org/alirazaalvi/Spa.svg?branch=master)](https://travis-ci.org/alirazaalvi/Spa)
[![Dependencies Status](https://david-dm.org/alirazaalvi/Spa.svg)](https://david-dm.org/alirazaalvi/Spa)
[![DevDependencies Status](https://david-dm.org/alirazaalvi/Spa/dev-status.svg)](https://david-dm.org/alirazaalvi/Spa#info=devDependencies)

# Single Page App
React js single page app to graphically display the bitcoin prices.

Table of Contents
-----------------

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

Prerequisites
-------------
- [Node.js 8.0+](http://nodejs.org)

Getting Started
---------------

The easiest way to get started is to clone the repository:
```bash
# Get the latest snapshot
git clone https://github.com/alirazaalvi/Spa.git myproject

# Change directory
cd myproject

#install create react app
npm i create-react-app

# Install NPM dependencies
npm install

# Then simply start your app
npm start

# Access the application
http://localhost:3000

# Optional with docker
 docker-compose up --build

# Test
npm test

# Lint
npm run lint

# Coverage
npm run coverage

# Demo page url
https://alirazaalvi.github.io/Spa/
```

Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **src/components**/*             | Contains all of the views.              |
| **src/actions**/*             | Contains all of the actions.              |
| **src/reducers**/*             | The data units have been stored into reducers.              |
| **src/stores**/*             | Combined reducers and store methods.              |
| **helpers**/*        | Utility methods.             |
| .eslintrc                          | Rules for eslint linter.                                     |
| .gitignore                         | Folder and files ignored by git.                             |
| .travis.yml                        | Configuration files for continuous integration.                |
| app.js                             | The main component.                                   |
| index.js                             | Entry point of the application.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Locked versions of NPM dependencies. |

