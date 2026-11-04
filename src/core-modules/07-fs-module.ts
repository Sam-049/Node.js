import path from "node:path";
import fs from "node:fs";
import fsPromises from "node:fs/promises"

const DEMO_FOLDER_PATH = path.join(process.cwd(), 'file-system', "fs-demo");
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, "sync-note.txt"); 

const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH, "callback-note.txt"); 
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH, "promise-note.txt"); 


// this is the format where our result would be returned as
type FileResult = {
    style: string,
    filename: string,
    content: string,
    sizeInBytes: number
}

//? fs module is a built-in Node.js module that allows you to interact with your operating system's file system.
/** helps to create files
 * write files
 * read files
 * check file infos
 * delete files
 */

/** we can do it in synchronous way - fs.readFileSync
 *  callback api - but in large project we can get into callback hell
 * promise api - largley willl use this
 */

//* When we should use sync operations:
// small start up
// build script
// local demos

//# When we shouldnot use sync operations:
// http req handlers
// high traffic apis
// background jobs

function ensureDemoFolderExists(): void { // here we are creating the directory if not present then writting can be done
  if (!fs.existsSync(DEMO_FOLDER_PATH)) {
    fs.mkdirSync(DEMO_FOLDER_PATH, { recursive: true });
  }
}

function runSyncExample(): FileResult {
    //write content to the file
    fs.writeFileSync(SYNC_FILE_PATH, "Created using sync fs", 'utf-8');
    // adding content without replacing the existing ones
    fs.appendFileSync(SYNC_FILE_PATH, "\nAppended using sync fs", 'utf-8');

    //read content from the file
    const content = fs.readFileSync(SYNC_FILE_PATH, 'utf-8');
    const stats = fs.statSync(SYNC_FILE_PATH);

    return {
      style: "sync",
      content,
      filename: path.basename(SYNC_FILE_PATH),
      sizeInBytes: stats.size,
    };
}



//---------------------------------------------------------------------------------------------------------
function runCallbackExample(): Promise<FileResult> {
  //this is an async method and we are using callback to implement
  return new Promise((resolve, reject) => {
    fs.writeFile(
      CALLBACK_FILE_PATH,
      "Created using callback in fs",
      "utf-8",
      (err) => {
        // in async one additonal parameter goes that is one callback for error
        if (err) {
          reject(err);
          return;
        }
        //# 1. Race Conditions (Simultaneous Operations): Node.js file system functions (writeFile, appendFile, readFile) are asynchronous. By calling them one after another without nesting, they all run at the same time. appendFile or readFile might finish before writeFile even creates the file.
        //~ So we are putting these alll functions into nested condition for progressive approach

        fs.appendFile(
          CALLBACK_FILE_PATH,
          "\nThis line is appended into this file using callback in fs (async way)",
          (err) => {
            if (err) {
              reject(err);
              return;
            }

            fs.readFile(CALLBACK_FILE_PATH, "utf-8", (err, content) => {
              if (err) {
                reject(err);
                return;
              }

              fs.stat(CALLBACK_FILE_PATH, (err, stats) => {
                if (err) {
                  reject(err);
                  return;
                }

                resolve({
                  style: "async callback",
                  content, // Pass encoding "utf-8" to readFile if you want this as a string
                  filename: path.basename(CALLBACK_FILE_PATH),
                  sizeInBytes: stats.size,
                });
              });
            });
          },
        );
      },
    );
  });
}
//---------------------------------------------------------------------------------------------------------
async function runPromiseExample(): Promise<FileResult> {  //for this we need fsPromises to be imported
  await fsPromises.writeFile(
    PROMISE_FILE_PATH,
    "Created using promise",
    "utf-8",
  );
  await fsPromises.appendFile(
    PROMISE_FILE_PATH,
    " Appended using promise apis",
    "utf-8",
  );
  const content = await fsPromises.readFile(PROMISE_FILE_PATH, "utf-8");
  const stats = await fsPromises.stat(PROMISE_FILE_PATH);

  return {
    style: "promises",
    content,
    filename: path.basename(PROMISE_FILE_PATH),
    sizeInBytes: stats.size,
  };
}



//---------------------------------------------------------------------------------------------------------

async function main(): Promise<void>{
    try {
        ensureDemoFolderExists();
        const syncResult = runSyncExample();
        console.log([syncResult]);

        console.log("-------------------------------------------------------------------------------------");

        const callbackResult = await runCallbackExample();
        console.log([callbackResult]);

        console.log(
          "-------------------------------------------------------------------------------------",
        );

        const promiseResult = await runPromiseExample();
        console.log([promiseResult]);
        
        
    } catch (error) {
        const message = error instanceof Error ? error.message : "unknown"
        console.error("File system error in sync",message);
        
    }
}

main()