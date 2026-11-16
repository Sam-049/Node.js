//? This tells somewhere an event has occcured and we have to respond to that action. The event may be a click, a keyboard press, or a hover or anything of that sort.

import EventEmitter from "node:events";

const appEvent = new EventEmitter();

type UserRegisterPayload = {
    id: number,
    email: string
}

// a demo function to emit the event
function registerUser(): void{
    const user = {
        id: 1,
        email:"sam123@gmail.com"
    }
    appEvent.emit("user:registered", user);

    console.log("register user: event listener completed !!");
    
}

// here we are listening to the event emitted
appEvent.on("user:registered", (user: UserRegisterPayload) => {
    console.log(`email listener: Welcome email sent to this user: ${user.email}`);
    
});

// one event cna have multiple listeners
appEvent.once("app:started", () => {
  console.log("Once listener: App started");
});

appEvent.on("user:registered", (user: UserRegisterPayload) => {
  console.log(`log listener: user ${user.id} and email is ${user.email}`);
});

appEvent.emit("app:started");
appEvent.emit("app:started");

registerUser()