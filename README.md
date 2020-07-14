# Thinkful Full Stack Capstone - Easy Budget App API Server

## Programmer
Chanda Hubbard

# 

While enrolled in Thinkful's Web Development bootcamp I created this Full-stack Capstone project.  

Link to the [Live heroku server](https://fast-garden-40399.herokuapp.com/)

## Easy Budget Client
Link to the [Client Repo](https://github.com/ChandaHubbard/Easy-Budget-Client)

## Technology Used
#### Front-end
- React
    - Router
    - Context
    - Libraries
        - Sweet Alerts
- HTML
- CSS
- Vercel(Zeit)

#### Back-end
- Node.js
- Express
    - Knex
    - Mocha, Chai & Supertest
- PostgreSQL
    - Elephant SQL
- Heroku

# 

## Summary

Easy budget is an interactive web application that was created to view and manage your monthly budget.  This app was created so that you can view all of your monthly expenses and figure out whether they align with your financial goals.

# 

## Easy Budget API

Easy Budget's back-end consists of an API server that was created with Node.js, Express, knex, and PostgreSQL

#### Easy Budget's API service consists of /GET /DELETE /POST and /PATCH endpoints

##### /GET at `/expenses`
##### /GET at `/expenses/:id`
##### /DELETE at `/expenses/:id`
##### /POST at `/expenses`
##### /PATCH at `/expenses/:id`

#### Easy Budget's API service accesses data that is stored in an PostgreSQL database
<!-- 

Documentation of your API.


 -->

## Scripts

- To start the application enter `npm start` in the terminal

- To run the test suite enter `npm test` in the terminal

## Deployment

- To deploy the app enter `npm run build` then `npm run deploy` in the terminal




## Other features to implement in future versions

<!-- [ ] Figure out how to handle edge cases for movie input
<br/>
[ ] Incorporate an additional API that will let the user know which streaming service currently offers their movie selection for viewing. -->

 -->


# Express Boilerplate!

This is a boilerplate project used for starting new projects!

## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.