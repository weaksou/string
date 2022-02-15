export function capitalize(str) {
  if (typeof str !== "string") throw new Error("Expected a string!");
  const nStr = str.trim();
  return (
    nStr.trim().substring(0, 1).toUpperCase() +
    nStr.substring(1, nStr.length).toLowerCase()
  );
}

export function noSpace(str) {
  return str.replace(/ /g, "");
}

export function escape(str) {
  if (typeof str !== "string") throw new Error("Expected a string!");
  return str.replace(/[^a-z0-9]/gi, "");
}

export function escapeSimple(str) {
  if (typeof str !== "string") throw new Error("Expected a string!");
  return oneSpace(str.replace(/[^a-z0-9| ]/gi, ""));
}

export function kebab(str) {
  if (typeof str !== "string") throw new Error("Expected a string!");
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9/d-]/gi, "-");
}

export function oneSpace(str) {
  if (typeof str !== "string") throw new Error("Expected a string!");
  return str.replace(/  +/g, " ");
}

export function elaps(str) {
  if (typeof str !== "string") throw new Error("Expected a string!");
  return str.replace(/\s\s+/g, " ");
}

export function validateURL(URL) {
  if (typeof URL !== "string") throw new Error("Expected a string!");
  const regExp = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return regExp.test(URL);
}

export function trimTo(string, count, co) {
  if (typeof string !== "string") throw new Error("Expected a string!");
  if (typeof count !== "number" || typeof co !== "number")
    throw new Error("Expected a number!");
  const dotsCounter = co ? co : 100;
  const dots = string.length >= dotsCounter ? "..." : "";
  return string.substring(0, count).trim() + dots;
}

export function trimToSimple(string, count) {
  if (typeof string !== "string") throw new Error("Expected a string!");
  if (typeof count !== "number") throw new Error("Expected a number!");
  return [string.substring(0, count), string.substring(count, string.length)];
}
