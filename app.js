function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

window.onload = function() {
  document.body.innerHTML =
    "<h1> OMG! you will not belive but...</h1>" +
    "<p>" +
    who[getRandomInt(4)] +
    " " +
    action[getRandomInt(4)] +
    " " +
    what[getRandomInt(3)] +
    " " +
    when[getRandomInt(5)] +
    "</p>";
};
