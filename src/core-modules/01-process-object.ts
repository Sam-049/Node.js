//? This module gives information about and control over the current;y running Node.js process
/**
 * 1. process.env - Used to load sensitive infos like port, secret keys, db urls, google auth like data from env files
 * 2. process.argv (argument vector) - return an array containing the command line arguments passes when executing a script
 * 3. process.exit - forces the current Node.js process to terminate synchronously. 0 is success and 1 or >0 is failure - uncaught error
 * 4. process lifecycle events like process.on
 */

import process from "node:process";

const nodeEnv = process.env.NODE_ENV ?? "development";
console.log(nodeEnv);

//* const PORT = 3000 this is a bad practise. it should always read from a file. IT SHOULD BE NUMBER(process.env.PORT : 3000)

/**
 * Another important example is process.argv[], we will notice it always have [2] index that is because the first 2 element is reserved for node
 * argv[0] is for the absolute path for the node and
 * argv[1] is the file apth of our file going to execute
 * [2] will be custom command like start or anything we want to give
 *
 * process.argv -> ["/path/to/node", "src/01-process-object.ts", "start"]
 *
 */

const commandArg = process.argv[2] ?? "start";
console.log({commandArg});

const command = commandArg.startsWith("--")
    ? commandArg.slice(2)
    : commandArg;

// diff flags we can run like fail and crash
// fail flag and crash flag

const shouldFail = process.argv.includes("--fail");
const shouldCrash = process.argv.includes("--crash");
// this will return true or false like here we r doing manually so we have to have this before function

// we can emit an event for exit so that we can run the function
// and this exit event is only helpful for the final synchronous code in general
// like if we r doing final log, final clean up this is very helpful

process.on("exit", (code) => {
  console.log(`Process finished with the exit code ${code}`); //0 means success and 1 means failure
});

function runApp(): void {
    console.log({ command }); //prints an object containing the variable name as key-value pair
    console.log(shouldCrash);
    
  if (shouldFail) {
    console.error(`Manual failure triggered with --fail flag`);
    process.exit(1); // failure state
  }
  if (shouldCrash) {
    console.error(`Manual failure triggered with --crash flag`);
    process.exit(1);
  }
}
runApp();

//npm run dev --start will giove success result
//npm run dev -- start -- --fail will give the failure scenario with code(1)
