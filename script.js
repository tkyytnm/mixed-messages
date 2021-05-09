const randomIndex = (prop) => Math.floor(Math.random() * prop.length);

const messages = {
  colors: [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "cyan",
    "violet",
    "amber",
    "aqua",
    "gray",
    "black",
    "white",
    "pink"
  ],
  adjectives: [
    "bad",
    "busy",
    "clever",
    "crazy",
    "cute",
    "evil",
    "fine",
    "funny",
    "elegant",
    "ugly",
    "short",
    "long",
    "rich",
    "shy"
  ],
  animals: [
    "dog",
    "puppy",
    "turtle",
    "rabbit",
    "parrot",
    "cat",
    "kitten",
    "goldfish",
    "mouse",
    "tropical fish",
    "hamster"
  ]
};

const res = [];

const createMessage = () => {
  for (let prop in messages) {
    res.push(messages[prop][randomIndex(prop)]);
  }
};

const printMessage = () => {
  createMessage();
  console.log(`It's a ${res.join(" ")}!`);
};

printMessage();