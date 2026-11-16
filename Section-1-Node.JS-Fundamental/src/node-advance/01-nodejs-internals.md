Node js is combination of v8 engines with c++ (system level prgramming) and many open source livraries that handles asynchronous operation, Input/output and system access

1. <V8-engine> - Developed by google which parses and compiles javascript code directly into machine code using JIT (Just-In-Time) compilation
2. <libuv> - Its a C library that equips Node with event loop, thread pool, and async operation such as FS, networking and DNS lookup
3. <c/c++> - Some libraries such as http, crupto, zlib and fs let node interact directly with the OS
4. <npm-ecosystem> - This build-in package manager allows developers to isnatll and share reusable code modules

![Node Internals](node-internals.drawio)