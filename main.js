const Parse = require('parse/node');

Parse.initialize(
    "4PZoO5hsy5TPnctC7S1hX5RwWRTKgbfFgf5Ol8SP",
    "02IDWWOQaxojs1UkUsSbgwrdpfF8RX8FSbl5fT4P"
  );

Parse.serverURL = 'https://pg-app-mbzm0xjvav5b7p1vb96xj5zjdd9vy4.scalabl.cloud/1/';

const MovieObject = Parse.Object.extend("Movies");

const movies = ["Gone with the Wind", "Forest Gump", "Good Will Hunting"].map((name) => {
  const movie = new MovieObject();
  movie.set("name", name);
  return movie;
});

const onSuccess = (result) => {
  // Execute any logic that should take place after the object is saved.
  console.info("New object was created with objectId:", result.id);
};
const onError = (error) => {
  // Execute any logic that should take place if the save fails.
  // error is a Parse.Error with an error code and message.
  console.error("Error message:", error.message);
};

for (const movie of movies) {
  movie.save()
    .then(onSuccess)
    .catch(onError);
}