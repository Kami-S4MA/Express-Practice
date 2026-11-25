/*

const{EventEmitter} = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("lunch", () => {
  console.log("yum")
})

eventEmitter.emit("lunch");

*/

const {reafFile, reaFileSync, readFileSync, readFile} = require("fs");
const txt = readFileSync("./hello.txt", "utf8");

console.log(txt);

console.log("Do this ASAP");

readFile("hello.txt", "utf8", (err, txt) => {
  console.log(txt);
})

console.log("Do this ASAP");
