"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const projectRoot = process.cwd();
console.log(projectRoot);
const userId = "42";
const originalName = "profilePhoto.png";
const uploadFilePath = node_path_1.default.join(projectRoot, "uploads", "users", userId, originalName);
console.log({ uploadFilePath });
const fileName = node_path_1.default.basename(uploadFilePath);
const fileExt = node_path_1.default.extname(uploadFilePath);
const parentFolder = node_path_1.default.dirname(uploadFilePath);
console.log({ fileName }, { fileExt }, { parentFolder });
//# sourceMappingURL=04-path-module.js.map