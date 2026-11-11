This is basically a javascript engine used by Node js for parsing the js code and compiling it to machine code

It will parse the code and produce bytecode (which also mean - going to create a internal representation of our code) and then it execute the code
- manages the call stack
- manage heap memeory and also
- perform garbage collection

![Node Internals](v8-engine.drawio)

1. in Parser our code gets parsed by v8 engine. If we have some wrong syntax or invalid, it gonna reject and show error.
2. If everything is normal, it is going to create Abstract syntax tree. This we call as AST in short. It will understand the structure of the code and understand. It also removes unnecessary intendation.
3. Once these are done, it gonna produce the bytecode (low level internal format which v8 understands)
4. Interpreter interprets the js code into machine code