
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Inserting entries into the Sashido database</h3>

  <p align="center">
    A qucik and easy to follow tutorial on how to insert records into the Sashido database
    <br />
    <br />
    <br />
    <a href="https://github.com/philipKovachev99/SashidoTask">View Demo</a>
    ·
    <a href="https://github.com/philipKovachev99/SashidoTask/issues">Report Bug</a>
    ·
    <a href="https://github.com/philipKovachev99/SashidoTask/issues">Request Feature</a>
  </p>
</p>


<!-- ABOUT THE PROJECT -->
## About The Project
This is a simple and comprehensive tutorial that aims to show how to insert records into the Sashido database, once the user has created an app using the dashboard.
<br/>
### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* Parse SDK
  ```sh
  npm i parse
  ```
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/philipKovachev99/SashidoTask
   ```

2. Isntall NPM packages by navigating to the folder containing the package.json file and run
   ```sh
   npm install 
   ```

3. Add your database connection strings and url in the main.js file from the Sashido App Dashboard

4. Run the main.js file
  ```sh
   node main.js 
   ```

<br/>
<!-- GETTING STARTED -->
## Getting Started
We need to use the Javascript Parse SDK in order to establish a connection with the Sashido database. The easiest way to integrate it into our JavaScript project is through the [npm module](https://www.npmjs.com/package/parse). Using [Node.js](https://nodejs.org/en/) to run our JavaScript file to add the records is beneficial as well. 

<br/>

## Creating a package.json file in our folder
 In your desired folder create a package.json file by typing
```sh
 npm init
```
Hit Enter on every prompted question until the initialization process is complete.

<br/>
## Integrating the Parse SDK int our project via npm
 In the project folder where we have our package.json file
  ```sh
 npm i parse --saved
```
<br/>
## Requiring the Parse SDK int our project in the beginning of our main.js file
```sh
const Parse = require('parse/node');
```
<br/>

## Initializing a connection to our Sashido database
Open the Sashido Dashboard of your App and navigate to the Getting Started page. Copy the 
entire code and paste it below the previous code that we wrote
```sh
Parse.initialize(
  "4PZoO5hsy5TPnctC7S1hX5RwWRTKgbfFgf5Ol8SP",
  "02IDWWOQaxojs1UkUsSbgwrdpfF8RX8FSbl5fT4P"
);

Parse.serverURL = 'https://pg-app-mbzm0xjvav5b7p1vb96xj5zjdd9vy4.scalabl.cloud/1/';
```
Note that for simplicity's sake I am exposing the connection strings in order to make the tutorial easier.
In production you would want to store them in environmental variables. 
Next we need to create a Class in our app Dashboard in order to store our records. Navigate to your Sashido Dashboard again
and click on the Create class button located in the Browser. I am going to name the class "Movies" since I am going to store
information related to movies. 
After we have created our class we need to initialize it and extend it in our code.
```sh
 const MovieObject = Parse.Object.extend("Movies");
```
<br/>

## Creating a collection of records and saving them to our database
Once we have required the Parse SDK and we have initialized a connection to our Sashido database we can start writing the 
logic for saving records in our database. I am going to insert three records, so in order to write less code I am going to
use an array:
```sh 
  const movies = ["Gone with the Wind", "Forest Gump", "Good Will Hunting"].map((name) => {
  const movie = new MovieObject();
  movie.set("name", name);
  return movie;
});
```
In this snippet I am creating an arrow function that accepts an array with my three movie names (you can add as much as you like), then I create a variable 
using the new MovieObject() and I use it to set the name column for each record. 

## Saving our records to the database and error handling
Now that we have our collection of records we can save them to the database and see if everything is working. I will create two functions, one that will inform us
that our records have been inserted successfully and one that prints an error in case our logic fails
```sh
  const onSuccess = (result) => {
  // Execute any logic that should take place after the object is saved.
  console.info("New object was created with objectId:", result.id);
};
```
You can write your own logic that will take place once the objects are saved, but for testing purposes I am just going to console.info the id's of the
saved objects. 

Here is our error handling function
```sh
 const onError = (error) => {
  // Execute any logic that should take place if the save fails.
  // error is a Parse.Error with an error code and message.
  console.error("Error message:", error.message);
};
```
Finally I am going to interate through the array of movies and insert them into the database
```sh
for (const movie of movies) {
  movie.save()
    .then(onSuccess)
    .catch(onError);
}
```
Now that we are done with our logic we can run the main.js file and see what happens
```sh
 node main.js
 ```
 Refresh your Sashido dashboard and now you should be able to see the three inserted records in your Class.


<!-- LICENSE -->
## License

Distributed under the MIT License.



<!-- CONTACT -->
## Contact

Philip Kovachev -  philipkovachev9@yahoo.com



