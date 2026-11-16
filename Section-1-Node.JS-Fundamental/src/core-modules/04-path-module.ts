/**
 * used to build and read file paths
 */

import path from "node:path"

// one of the bad practice is to build a path manually using + symbol to do
/**
 * const filPath = root + "/uploads" + filename
 * 
 * instead will use join method
 * path.join() - this uses correct separator for the current os
 * 
 * eg - /users/sameer/project/fil e.txt but in other os it may be different so use of join is imp
 * 
 * we have something called current working directory
 * process.cwd() tells folder from where the node process starts
 */

const projectRoot = process.cwd();
console.log(projectRoot);

// suppose we want to store in this path -> /uploads/users/42/profilePhoto.png 
const userId = "42";
const originalName = "profilePhoto.png";

// imp -> creates a path string but not create a folder if doesnot exists
const uploadFilePath = path.join(
    projectRoot, "uploads", "users", userId, originalName
)
console.log({uploadFilePath});

//* If we want to get some filename
const fileName = path.basename(uploadFilePath); // instead of entire path, jus will print the filename
const fileExt = path.extname(uploadFilePath) // gives the extension of the file
const parentFolder = path.dirname(uploadFilePath) // gives the parent folder
console.log({fileName}, {fileExt}, {parentFolder});

