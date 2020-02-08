const data = [
  {
    id: 0,
    show: "Breaking Bad",
    favChar: "Jessie Pinkmen",
    img:
      "https://vignette.wikia.nocookie.net/breakingbad/images/9/97/Jesse_2010.png/revision/latest?cb=20191126213705",
    quote: "Bitch!"
  },

  {
    id: 1,
    show: "Game of Thrones",
    favChar: "Tyrion",
    img:
      "https://i.pinimg.com/originals/a9/48/8a/a9488a984145e5d1e94d635891eda8f9.png",
    quote: "I drink and I know things!"
  },
  {
    id: 2,
    show: "Arthur Read",
    favChar: "baxter",
    img:
      "https://img.favpng.com/13/16/21/buster-baxter-arthur-read-buster-bunny-nigel-ratburn-character-png-favpng-HqUfZpxx1ubDvPKFhKXdat00i.jpg",
    quote: "Arthur!"
  },
  {
    id: 3,
    show: "Euphoria",
    favChar: "Rue",
    img:
      "https://i.pinimg.com/564x/a4/07/5f/a4075f13b5cfbd0f7ff764a08bfc436c.jpg",
    quote: "I sincerely apologize for telling you to go F*** Yourself!"
  },
  {
    id: 4,
    show: "Prison Break",
    favChar: "Scofield",
    img:
      "https://www.writeups.org/wp-content/uploads/Michael-Scofield-Prison-Break-Wentworth-Miller.jpg",
    quote: "Preparation can only take you so far!"
  },
  {
    id: 5,
    show: "Walking Dead",
    favChar: "Daryl",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71FD4f8q2wL._AC_SX425_.jpg",
    quote: "Hey, you shoot me again, you best pray I'm dead!"
  },
  {
    id: 6,
    show: "Beavis and Butthead",
    favChar: "Beavis and Butthead",
    img:
      "https://stussy-wordpress-production.s3.amazonaws.com/stussy_blog/BB_01.jpg",
    quote: "Thinking sucks!"
  },
  {
    id: 7,
    show: "Pinky and the Brain",
    favChar: "Brain",
    img:
      "https://shortcut-test2.s3.amazonaws.com/uploads/project/attachment/25375/default_brain.jpg",
    quote: "Same thing we do every day Pinky...TRY TO TAKE OVER THE WORLD!"
  },
  {
    id: 8,
    show: "Family Matters",
    favChar: "Steve Urkel",
    img:
      "https://us.hola.com/imagenes/cine/2013081466605/jaleel-white-steve-urkel-cosas-de-casa/0-244-961/steve-urkel3-a.jpg",
    quote: "Did I do that?"
  },
  {
    id: 9,
    show: "South Park",
    favChar: "Cartmen",
    img:
      "https://pbs.twimg.com/profile_images/3449710167/28a9297e920bcb94916f87da53f26507_400x400.jpeg",
    quote: "You guys suck I'm going home!"
  }
];

//Functionality END POINTS

//get
let getShows = (req, res) => {
  res.status(200).send(data);
};
//post

//put

//delete .this function will invoke the delete function in index.js
let deleteShow = (req, res) => {
  //this function would look for the id that comes from the front and compare it to the id in the object and splice it 1 at a time
  const { id } = req.params;
  const deleteID = data.findIndex(val => val.id == id); 
  data.splice(deleteID, 1);
  res.status(200).send(data);
};

module.exports = {
  getShows,
  deleteShow
};
