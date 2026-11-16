"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_process_1 = __importDefault(require("node:process"));
const nodeEnv = node_process_1.default.env.NODE_ENV ?? "development";
console.log(nodeEnv);
const commandArg = node_process_1.default.argv[2] ?? "start";
console.log({ commandArg });
const command = commandArg.startsWith("--")
    ? commandArg.slice(2)
    : commandArg;
const shouldFail = node_process_1.default.argv.includes("--fail");
const shouldCrash = node_process_1.default.argv.includes("--crash");
node_process_1.default.on("exit", (code) => {
    console.log(`Process finished with the exit code ${code}`);
});
function runApp() {
    console.log({ command });
    console.log(shouldCrash);
    if (shouldFail) {
        console.error(`Manual failure triggered with --fail flag`);
        node_process_1.default.exit(1);
    }
    if (shouldCrash) {
        console.error(`Manual failure triggered with --crash flag`);
        node_process_1.default.exit(1);
    }
}
runApp();
//# sourceMappingURL=01-process-object.js.map