//? used for getting some details about the operting system we r working in like CPU information, memory, find home / temp directory

import os from 'node:os'
function runOsDemo(): void {
    console.log('platform : ', os.platform());
    console.log("architecture : ",os.arch());
    console.log("os type : ", os.type());
    console.log("os release  : ", os.release());
    console.log("home directory : ", os.homedir());
    console.log("temp directory : ", os.tmpdir());
    
    const cpus = os.cpus()
    console.log(cpus[0]);
    
    console.log(os.totalmem(), os.freemem());
    
    
}
runOsDemo()