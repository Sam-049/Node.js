===================================================================================================================================================
<SECTION-1: NODE FUNDAMENTALS AND INTERNALS
===================================================================================================================================================

# Node.js is a javascript runtime environment outside the browser
v8 engine is in the browser which helps js code to run

so basically node is combination of V8 engine and some server side capabilities

 - Which version to go for?
 + Always LTS (Long Term Support) version is recommened as it is stable and if any bug, it would be fixed at priority.
   Here we are using v22.12.0

# npm - Node Package Manager - 10.9.0
 - Package Installation: libraries, frameworks, utility tools into your project.
 - Dependency Management: Track project versions, sub-dependencies, and compatibility rules automatically inside a package.json & package-lock.json file.
 - Task Automation and Script Running: Define and execute custom command-line scripts (like building, testing, or starting a server) using npm run.
 - Security Auditing: Scan project dependencies for known vulnerabilities using built-in commands like npm audit.

# Dependencies vs dev-Dependencies
 - Dependencies Required for the application to function at runtime where as dev-Dependencies Required only for building, testing, linting, or debugging.
 - Installed in production where as dev-dep is skipped in production
 - npm install <package-name> is used for normal dependencies where as npm install <package-name> --save-dev is used for dev-dependencies

# Folder structure
 - We have to see whether the file that we create holds any responsibility. According to that we will put that particular file inside a folder like utils it will hold helper files. Service folder will contain dependencies services files inside that like this routes, controllers, models etc
 - Always make sure there is only one entry file or root file of the application
   Root file should have the info of entire source code

========================================================
# Important Modules
 - <Process-Objects -> 
 + Representing and providing details about and control over the current node program.
 + Used to load sensitive data from env files, process.argv(2), stdout/stdin, process.on ans so on

 - <Crypto-Module ->
 + used for security related tasks like creating random UUID, creating secure tokens, hashing data, to verify the data has bee changed or not, encrypt/decrypt.

 - <OS-Module ->
 + used for getting some details about the operting system we r working in like CPU information, memory, find home / temp directory

 - <Path-Module ->
 + used to build and read file paths.
 + we have commonly used methods like join, dirname, basename, extname and others. process.cwd would give us the current working directory

 - <Timers-Module ->
 + This is used when we want to run our code after some delay or we want to repeat the code after regular intervals
 + Some imp methods will see here is: settimeout, setinterval, cleartimeout, clearinterval, setimmediate ....

========================================================
# Callbacks
 - These are the function being passed as an argument in another function. Highly important implementation in interview

# Promises
 - specialized objects act as eventual completion of an asynchronous operation. These are introduced to counter callback hell. These comes with clean syntax and better error handling

# Async-Await
 - provides a cleaner syntax for working with Promises. It eliminates the .then() mess and handle properly with try catch block

========================================================
 - <File-System-Module ->
 + fs module is a built-in Node.js module that allows you to interact with your operating system's file system.

 - <Buffers ->
 + When we work with raw binary data. Binary data means when we have data stored in bytes. We can use it in reading files, receiving req bodies, working with streams, handling images, pdf files, videos, encrypt and hashing. 

 - <URL-Module-(Uniform-Resource-Locator) ->
 + This module in Node.js provides utilities for URL resolution and parsing. 
 + Resolution as in combining baseurl with the relative path of an webpage
 + Parsing is simply opposite. Breaking doen the url into readable component like - protocol, host/domain name, port, path, search parameters

 - <Event-Emitter ->
 + This tells somewhere an event has occcured and we have to respond to that action. The event may be a click, a keyboard press, or a hover or anything of that sort.
 + This event is going to be listened by event listeners. .on(), .once(), .emit()

 - <Streams ->
 + This is used to handle reading and writing data efficiently by processing it piece by piece (in chunks) rather than loading the entire dataset into memory a once.
 
========================================================
 # HTTP Module
 - Its a core built-in module used to transfer data over the Hyper Text Transfer Protocol. 
 - It allows you to both create an HTTP server (to listen for incoming requests) and act as an HTTP client (to make external API requests) without installing any third-party packages

========================================================
 # Basic - Routing
 - this shows how server resonse to particular client request. By using if-else ow else switch where we check the method and pathname and accordingly we open up the page.

========================================================
 # raw Reading request body, JSON response and calling external API 
========================================================

- We see some advance internals of Node.js Referring to that files with the flowchat would makes understanding easier (node-advance)

========================================================
