"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_os_1 = __importDefault(require("node:os"));
function runOsDemo() {
    console.log('platform : ', node_os_1.default.platform());
    console.log("architecture : ", node_os_1.default.arch());
    console.log("os type : ", node_os_1.default.type());
    console.log("os release  : ", node_os_1.default.release());
    console.log("home directory : ", node_os_1.default.homedir());
    console.log("temp directory : ", node_os_1.default.tmpdir());
    const cpus = node_os_1.default.cpus();
    console.log(cpus[0]);
    console.log(node_os_1.default.totalmem(), node_os_1.default.freemem());
}
runOsDemo();
//# sourceMappingURL=03-os-module.js.map