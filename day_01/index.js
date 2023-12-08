var fs = require("fs");
var numberMin = 48;
var numberMax = 57;
var numbers = [
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
var textIn = fs.readFileSync("./day_01/input.txt", "utf8");
var data = textIn.split("\n");
var replaceStringNumbers = function (str) {
    // let newStr = str;
    // let charArr = str.split("");
    // const indexStarts: { num: string; idx: number }[] = [];
    // console.log(charArr);
    var newStr = str;
    numbers.forEach(function (num) {
        // let numChars = num.name.split("");
        // for (let i = 0; i < charArr.length; i++) {
        //   const indices: number[] = [];
        //   if (charArr[i] === numChars[i]) {
        //     // console.log(charArr[i], numChars[i]);
        var _a, _b;
        //     indices.push(i);
        //   }
        //   if (indices.length === numChars.length) {
        //     charArr[i] = num.num.toString();
        //     console.log(charArr);
        //     // indexStarts.push({ num: num.num.toString(), idx: indices[0] });
        //   }
        // }
        if (str.includes(num.name)) {
            var numMatches = (_b = (_a = str.match(new RegExp(num.name, "g"))) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 1;
            for (var i = 0; i < numMatches; i++) {
                var startIdx = newStr.indexOf(num.name);
                newStr = "".concat(newStr.slice(0, startIdx + 1)).concat(num.num.toString()).concat(newStr.slice(startIdx + 1));
            }
            // updatedStr.replace(new RegExp(num.name, "g"), num.num.toString());
        }
    });
    return newStr;
};
var total = 0;
data.map(function (row) {
    var charCodes = [];
    // Part 1
    // let newRow = row;
    // Part 2
    var newRow = replaceStringNumbers(row);
    for (var i = 0; i < newRow.length; i++) {
        var code = newRow.charCodeAt(i);
        code >= numberMin && code <= numberMax && charCodes.push(newRow[i]);
    }
    var firstAndLast = charCodes[0] &&
        (charCodes.length > 1
            ? charCodes[0] + charCodes[charCodes.length - 1]
            : charCodes[0] + charCodes[0]);
    console.log(row, newRow, firstAndLast);
    if (firstAndLast) {
        total += Number(firstAndLast);
    }
});
console.log("Total:", total);
