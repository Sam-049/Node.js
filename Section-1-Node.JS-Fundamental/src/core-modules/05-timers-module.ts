/**
 * This is used when we want to run our code after some delay or we want to repeat the code after regular intervals
 + Some imp methods will see here is: settimeout, setinterval, cleartimeout, clearinterval, setimmediate ....
 */

import { setTimeout as sleep } from "node:timers/promises";

function setTimeoutExample(): void {
     console.log("1. setTimeout example started !!");
    setTimeout(() => {
         console.log("2. this runs after 1 sec");
         
    }, 1000)
    console.log("3. this runs immediately. Node doesnot wait for settimeout to complete");
    
}

function clearTimeoutExample(): void{
    const timerId = setTimeout(() => {
        console.log("this message will never run because cleartimeout will cancel this 2 sec timer");
        
    }, 2000)

    clearTimeout(timerId);
    console.log("4. this will run after canceling the 2 sec setTimeout");
    
}

function setIntervalExample(): void{ // this is going to run again n again in regular interval
    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        console.log(`5. set interval triggered ${count} times`);
        
        if (count === 5) {
            clearInterval(intervalId);  //clears the interval that we have set
            console.log("6. set interval stopped");
            
        }
    },2000)
}

function setimmediateExample(): void{
    setImmediate(() => {
        console.log("7. set Immediate callback");
        
    })
    console.log("8. synchronous code after setImmediate");
    
}



 
function runTimerDemo(): void{
    setTimeoutExample();
    clearTimeoutExample();
    setIntervalExample();
    setimmediateExample();
}

runTimerDemo();

//! Promise based setTimeout also we can have like:

async function promiseTimerExample(): Promise<void>{
    console.log("9. waiting for promise based timer");

    await sleep(5500);

    console.log("10. promise based timer finished after 5.5 seconds");
    
    
}

promiseTimerExample().catch((error: unknown) => {
    console.log("Promise based timer failed with: ", error);
    
})