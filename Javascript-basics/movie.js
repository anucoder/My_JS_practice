var movies = [
  {
    name : "In Burges",
    rating : 5,
    hasWatched : true
  },
  {
    name : "Frozen",
    rating : 4.5,
    hasWatched : false
  },
  {
    name : "Mad Max Fury Road",
    rating : 5,
    hasWatched : true
  },
  {
    name : "Les Miserables",
    rating : 3.5,
    hasWatched : false
  },
]

movies.forEach((movie, i) => {
  var watchStat;
  if(movie.hasWatched) watchStat = "You have watched";
  else watchStat = "You have not watched";
  console.log(watchStat+" \""+movie.name+"\" - "+movie.rating+" stars");
});
