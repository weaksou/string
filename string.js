//Capitalize first letter: HellO USER => Hello user
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

//simplify:  HELLo user30,c => hellouser30c 
exports.simplify = function(string) {
    //regular expression to replaces all non-alphanumeric characters.
    const regExp = /[^a-z0-9]/gi;
    //using the regExp
    const cleaned = string.replace(regExp, "");
    //removing spaces from the cleaned string
    const finall = cleaned.replace(" ", "");
    //return the finall version
    return finall;
}

