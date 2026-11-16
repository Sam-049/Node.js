"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
const promises_1 = __importDefault(require("node:fs/promises"));
const DEMO_FOLDER_PATH = node_path_1.default.join(process.cwd(), 'file-system', "fs-demo");
const SYNC_FILE_PATH = node_path_1.default.join(DEMO_FOLDER_PATH, "sync-note.txt");
const CALLBACK_FILE_PATH = node_path_1.default.join(DEMO_FOLDER_PATH, "callback-note.txt");
const PROMISE_FILE_PATH = node_path_1.default.join(DEMO_FOLDER_PATH, "promise-note.txt");
function ensureDemoFolderExists() {
    if (!node_fs_1.default.existsSync(DEMO_FOLDER_PATH)) {
        node_fs_1.default.mkdirSync(DEMO_FOLDER_PATH, { recursive: true });
    }
}
function runSyncExample() {
    node_fs_1.default.writeFileSync(SYNC_FILE_PATH, "Created using sync fs", 'utf-8');
    node_fs_1.default.appendFileSync(SYNC_FILE_PATH, "\nAppended using sync fs", 'utf-8');
    const content = node_fs_1.default.readFileSync(SYNC_FILE_PATH, 'utf-8');
    const stats = node_fs_1.default.statSync(SYNC_FILE_PATH);
    return {
        style: "sync",
        content,
        filename: node_path_1.default.basename(SYNC_FILE_PATH),
        sizeInBytes: stats.size,
    };
}
function runCallbackExample() {
    return new Promise((resolve, reject) => {
        node_fs_1.default.writeFile(CALLBACK_FILE_PATH, "Created using callback in fs", "utf-8", (err) => {
            if (err) {
                reject(err);
                return;
            }
            node_fs_1.default.appendFile(CALLBACK_FILE_PATH, "\nThis line is appended into this file using callback in fs (async way)", (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                node_fs_1.default.readFile(CALLBACK_FILE_PATH, "utf-8", (err, content) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    node_fs_1.default.stat(CALLBACK_FILE_PATH, (err, stats) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve({
                            style: "async callback",
                            content,
                            filename: node_path_1.default.basename(CALLBACK_FILE_PATH),
                            sizeInBytes: stats.size,
                        });
                    });
                });
            });
        });
    });
}
async function runPromiseExample() {
    await promises_1.default.writeFile(PROMISE_FILE_PATH, "Created using promise", "utf-8");
    await promises_1.default.appendFile(PROMISE_FILE_PATH, " Appended using promise apis", "utf-8");
    const content = await promises_1.default.readFile(PROMISE_FILE_PATH, "utf-8");
    const stats = await promises_1.default.stat(PROMISE_FILE_PATH);
    return {
        style: "promises",
        content,
        filename: node_path_1.default.basename(PROMISE_FILE_PATH),
        sizeInBytes: stats.size,
    };
}
async function main() {
    try {
        ensureDemoFolderExists();
        const syncResult = runSyncExample();
        console.log([syncResult]);
        console.log("-------------------------------------------------------------------------------------");
        const callbackResult = await runCallbackExample();
        console.log([callbackResult]);
        console.log("-------------------------------------------------------------------------------------");
        const promiseResult = await runPromiseExample();
        console.log([promiseResult]);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "unknown";
        console.error("File system error in sync", message);
    }
}
main();
//# sourceMappingURL=07-fs-module.js.map