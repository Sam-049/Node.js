"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    {
        id: 1,
        name: "Sameer",
        role: "User",
    },
    {
        id: 2,
        name: "Ram",
        role: "Admin",
    },
    {
        id: 3,
        name: "Shyam",
        role: "Admin",
    },
];
function findUserWithCallback(userId, callback) {
    setTimeout(() => {
        const user = users.find(currentUser => currentUser.id === userId);
        if (!user) {
            callback(new Error(`user with id ${userId} is not found`));
            return;
        }
        else {
            callback(null, user);
        }
    }, 1000);
}
findUserWithCallback(3, (error, user) => {
    if (error) {
        console.log("callback error", error);
    }
    console.log("callback result", user);
});
function fetchUserWithPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((currentUser) => currentUser.id === userId);
            if (!user) {
                reject(new Error(`User with this id ${userId} not found`));
                return;
            }
            else {
                resolve(user);
            }
        });
    });
}
fetchUserWithPromise(2).then((user) => {
    console.log("promise result: ", user);
}).catch((error) => {
    console.error("promise error: ", error);
});
async function fetchUserWithAsyncAwait(userId) {
    try {
        const user = await fetchUserWithPromise(userId);
        console.log("Async await result", user);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "unknown";
        console.error("Async await failed: ", message);
    }
}
fetchUserWithAsyncAwait(1);
//# sourceMappingURL=06-callback-promises-async-await-module.js.map