"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("node:timers/promises");
function setTimeoutExample() {
    console.log("1. setTimeout example started !!");
    setTimeout(() => {
        console.log("2. this runs after 1 sec");
    }, 1000);
    console.log("3. this runs immediately. Node doesnot wait for settimeout to complete");
}
function clearTimeoutExample() {
    const timerId = setTimeout(() => {
        console.log("this message will never run because cleartimeout will cancel this 2 sec timer");
    }, 2000);
    clearTimeout(timerId);
    console.log("4. this will run after canceling the 2 sec setTimeout");
}
function setIntervalExample() {
    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        console.log(`5. set interval triggered ${count} times`);
        if (count === 5) {
            clearInterval(intervalId);
            console.log("6. set interval stopped");
        }
    }, 2000);
}
function setimmediateExample() {
    setImmediate(() => {
        console.log("7. set Immediate callback");
    });
    console.log("8. synchronous code after setImmediate");
}
function runTimerDemo() {
    setTimeoutExample();
    clearTimeoutExample();
    setIntervalExample();
    setimmediateExample();
}
runTimerDemo();
async function promiseTimerExample() {
    console.log("9. waiting for promise based timer");
    await (0, promises_1.setTimeout)(5500);
    console.log("10. promise based timer finished after 5.5 seconds");
}
promiseTimerExample().catch((error) => {
    console.log("Promise based timer failed with: ", error);
});
//# sourceMappingURL=05-timers-module.js.map