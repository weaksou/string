//exporting functions
export {
  capitalize,
  noSpace,
  escape,
  escapeSimple,
  kebab,
  oneSpace,
  elaps,
  validateURL,
  trimTo,
  trimToSimple
};

function capitalize(str) {
  const nStr = str.trim();
  return (
    nStr.trim().substring(0, 1).toUpperCase() +
    nStr.substring(1, nStr.length).toLowerCase()
  );
}

function noSpace(str) {
  return str.replace(/ /g, "");
}

function escape(str) {
  return str.replace(/[^a-z0-9]/gi, "");
}

function escapeSimple(str) {
  return oneSpace(str.replace(/[^a-z0-9| ]/gi, ""));
}

function kebab(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9/d-]/gi, "-");
}

function oneSpace(str) {
  return str.replace(/  +/g, " ");
}

function elaps(str) {
  return str.replace(/\s\s+/g, " ");
}

function validateURL(URL) {
  const regExp = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!regExp.test(URL);
}

function trimTo(string, count, co){
  const dotsCounter = co ? co : 100;
  const dots = string.length >= dotsCounter ? "..." : "";
  return string.substring(0, count).trim() + dots;
}

function trimToSimple(string, count) {
  return [
    string.substring(0, count),
    string.substring(count, string.length)
  ]
}


console.log(trimToSimple("this is some text", 10));
