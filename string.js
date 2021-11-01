//Capitalize first letter function
exports.capitalize = function (string) {
  //crop fist letter
  const firstLetter = string.substring(0, 1);
  //crop the other letters expect for the first one
  const otherLetters = string.substring(1, string.length);
  //capitalize first Letter and assemble it with lowercase other Letters
  const finalString = firstLetter.toUpperCase() + otherLetters.toLowerCase();
  //return the cropped version
  return finalString;
};
