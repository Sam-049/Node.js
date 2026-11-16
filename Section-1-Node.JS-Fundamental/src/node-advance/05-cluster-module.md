normal node js -> one main thread
This cluster module allow us to create multiple child proesses that share same server port
- Because Node runs on single thread, it only utilises single CPU core. But using this cluster module solves this limitation by letting us scale horizontally across all CPU cores on our server.
- This improves significant performance and higher traffic loads

* Note to be taken - 
- each and every worker process has 
    + its own node js runtime
    + its own v8 engine
    + its won event loop
    + its own main js thread
    + its own memory


- <Flow-chart>
![Node Internals](cluster-module.drawio)

Here the primary process is going to manage the worker processes
1. it will start all the worker process
2. watch everyone is in proper health or not
3. if some worker got into failed state, it is going to restart that worker
4. coordinate the process lifecycle