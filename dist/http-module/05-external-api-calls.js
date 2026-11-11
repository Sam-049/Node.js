"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const API_URL = "https://jsonplaceholder.typicode.com/users/1";
function transformUser(rawData) {
    return {
        id: rawData.id,
        name: rawData.name,
        email: rawData.email,
        company: rawData.company.name
    };
}
async function fetchExternalUser() {
    const controller = new AbortController();
    const timeOut = setTimeout(() => {
        controller.abort();
    }, 10000);
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            signal: controller.signal
        });
        if (!response.ok) {
            console.error(`upstream API failed wioth http ${response.status}`);
            return;
        }
        const rawUser = (await response.json());
        const user = transformUser(rawUser);
        console.log(user);
    }
    catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
            console.error("request failed because upstream api took longer than 10 seconds to respond");
            return;
        }
        const message = error instanceof Error ? error.message : "unknown";
        console.error("External api failed", message);
    }
    finally {
        clearTimeout(timeOut);
    }
}
fetchExternalUser();
//# sourceMappingURL=05-external-api-calls.js.map