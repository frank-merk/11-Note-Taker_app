# 11-Note-Taker-App
Assignement 11: Note Taking Application using Express JS

# 10-OOP-Employee-Generator
Employee generator application using Classes, Inquirer, and Jest

* [Live Demo](https://floating-mesa-21114.herokuapp.com/)

## Overview

This application uses Express, uuid, path, and fs to create a note taking application where a user can create, store, and delete notes. The sample app is deployed using heroku.

## Installation

To insall, first make sure you have the dependencies:

`npm install`

To run the application locally, you will use:

`node server.js`

## Strategy

My goal was to follow server and routing structure setups featured in in-class activities. The boilerplate server.js file works well for this application, as well as some previous material for writing files.

## Challenges

Like others in class, I struggled to get the delete functionality to work on a single note...I kept running into an issue where my delete button deleted all the notes or multiple files, rather than a single one. Thankfully, Lita Beach provided a solution in the "Ask The Class" Slack using the splice method to remove the desired file by matching it with a specific file from uuid. There were also some challenges deploying to Herkou (which I learned is case sensitive for my routes) and in keeping file structure and variable names straight.

## License

[Apache 2.0](https://opensource.org/licenses/Apache2.0)

## Questions

For further questions, contact here:
* Email Address: jlimhb@gmail.com
* GitHub: [frank-merk](https://github.com/frank-merk)


