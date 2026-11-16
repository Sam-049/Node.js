Its a native library used by Node.js

# helps to handle Async operation across diff OS
- event loop
- worker thread pool
- timers
- async i/o operations

# v8 doesnot provide 
- fs
- network socket handling
- timers
- general event loop for node js apis

So it needs separate layer to coordinate this runtime features

Event loop ->
- complete i/o operations
- timers -> if some timers are in ready state
- pending callbacks
- socket activity

Thread pool ->
- libuv provides a shared worker thread pool
  + this pool is used by those operations which are asynchronous
    + like if we have multiple fs operations, cryptographic op, compression related work this pool would be used.
    + if we have timers, Node will track those timers and determine when the timer will be ready to get executable. In the mean time it doesnot sleep on the main thread. It continue to execute others tasks



- <flow-chart>
![Node Internals](libuv.drawio)