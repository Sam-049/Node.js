"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function runUrlDemo() {
    const apiURL = new URL("https://example.com/users?page=2&limit=10");
    console.log(apiURL.href);
    console.log(apiURL.protocol);
    console.log(apiURL.hostname);
    console.log(apiURL.pathname);
    console.log(apiURL.searchParams);
    const page = apiURL.searchParams.get("page");
    const limit = apiURL.searchParams.get("limit");
    console.log(page, limit);
    apiURL.searchParams.set("page", "3");
    apiURL.searchParams.set("limit", "20");
    const pageUpdated = apiURL.searchParams.get("page");
    const limitUpdated = apiURL.searchParams.get("limit");
    console.log(pageUpdated, limitUpdated);
    console.log(apiURL.href);
    const queryParams = new URLSearchParams({
        search: "node js",
        page: "1",
        limit: "5",
    });
    console.log(queryParams.toString());
}
runUrlDemo();
//# sourceMappingURL=09-url-module.js.map