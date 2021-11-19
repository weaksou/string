//exporting functions
exports.capitalize = capitalize;
exports.noSpace = noSpace;
exports.escape = escape;
exports.simplify = simplify;
exports.kebab = kebab;


//capitalize first letter of a string and turn others to small caps. capitalize("hello") > Hello
function capitalize(str) {
  //crop fist letter
  const firstLetter = str.substring(0, 1);
  //crop the other letters expect for the first one
  const otherLetters = str.substring(1, str.length);
  //capitalize first Letter and assemble it with lowercase other Letters
  const finalString = firstLetter.toUpperCase() + otherLetters.toLowerCase();
  //return the cropped version
  return finalString;
}

//noSpace. remove all spaces in your noSpace("He ll o") > "Hello"
function noSpace(str) {
  return str.replace(" ", "");
}
//remove all non-alphanumeric characters from string. escape("hello&#9!_WORLD") >hello9WORLD
function escape(str) {
  //regular expression
  const regExp = /[^a-z0-9]/gi;
  return str.replace(regExp, "");
}

//simplify
function simplify(str){
  let text = str;
  text = escape(text);
  text = noSpace(text);
  return text.toLowerCase();
}
//kebab case
function kebab(str) {
  return escape(str).toLowerCase().replace(" ", "-");
}
