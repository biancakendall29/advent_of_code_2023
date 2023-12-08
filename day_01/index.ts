const fs = require("fs");

const numberMin = 48;
const numberMax = 57;

const numbers = [
  { name: "one", num: 1 },
  { name: "two", num: 2 },
  { name: "three", num: 3 },
  { name: "four", num: 4 },
  { name: "five", num: 5 },
  { name: "six", num: 6 },
  { name: "seven", num: 7 },
  { name: "eight", num: 8 },
  { name: "nine", num: 9 },
];

const textIn = fs.readFileSync("./day_01/input.txt", "utf8");
const data = textIn.split("\n");

const replaceStringNumbers = (str: string) => {
  let newStr = str;
  numbers.forEach((num) => {
    if (str.includes(num.name)) {
      let numMatches = str.match(new RegExp(num.name, "g"))?.length ?? 1;
      for (let i = 0; i < numMatches; i++) {
        let startIdx = newStr.indexOf(num.name);
        newStr = `${newStr.slice(
          0,
          startIdx + 1
        )}${num.num.toString()}${newStr.slice(startIdx + 1)}`;
      }
    }
  });
  return newStr;
};

let total = 0;
data.map((row: string) => {
  let charCodes: string[] = [];

  // Part 1
  // let newRow = row;

  // Part 2
  let newRow = replaceStringNumbers(row);

  for (let i = 0; i < newRow.length; i++) {
    let code = newRow.charCodeAt(i);
    code >= numberMin && code <= numberMax && charCodes.push(newRow[i]);
  }
  let firstAndLast =
    charCodes[0] &&
    (charCodes.length > 1
      ? charCodes[0] + charCodes[charCodes.length - 1]
      : charCodes[0] + charCodes[0]);

  if (firstAndLast) {
    total += Number(firstAndLast);
  }
});

console.log("Total:", total);
