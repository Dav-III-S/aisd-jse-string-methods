const str = "JavaScrpit is a Veratile language";
console.log("Initial String: ", str);

const words = str.split(" ")
console.log("Using Split():", words)

const sliced = str.slice(0,13);
console.log("Using sliced()", sliced)

const newStr = str.concat(" loved by developers.");
console.log("Using concat():", newStr);

const replacedStr = str.replace("Veratile", "powerful");
console.log("Using replace():", replacedStr);

const upperCaseStr = str.toLocaleUpperCase();
console.log("Using toUpperCase():", upperCaseStr);

const lowerCaseStr = str.toLowerCase();
console.log("Using toLowerCase():", lowerCaseStr);

const containsWord = str.includes("Veratile");
console.log("Using includes():", containsWord)

const index = str.indexOf("language");
console.log("Using indexOf():", index);

const strWithSpaces = "      Hello JavaScrpit!";
const trimmedStr = strWithSpaces.trim();
console.log("Using trim():", `"${trimmedStr}`)

const csvData = "Apple,Orange,Banana";
const fruits = csvData.split(",");
console.log("Using split() with comma delimiter:", fruits);