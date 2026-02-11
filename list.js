const fs = require("fs");

/* let ipsum = fs.readFileSync("./readme.md", "utf-8");
console.log(ipsum); */

fs.readFile("./readme.md", "utf-8", (err, ipsum) => {
  console.log(ipsum);
});
console.log("reading the file...");
