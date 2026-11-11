"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_events_1 = __importDefault(require("node:events"));
const appEvent = new node_events_1.default();
function registerUser() {
    const user = {
        id: 1,
        email: "sam123@gmail.com"
    };
    appEvent.emit("user:registered", user);
    console.log("register user: event listener completed !!");
}
appEvent.on("user:registered", (user) => {
    console.log(`email listener: Welcome email sent to this user: ${user.email}`);
});
appEvent.once("app:started", () => {
    console.log("Once listener: App started");
});
appEvent.on("user:registered", (user) => {
    console.log(`log listener: user ${user.id} and email is ${user.email}`);
});
appEvent.emit("app:started");
appEvent.emit("app:started");
registerUser();
//# sourceMappingURL=10-event-emitter.js.map