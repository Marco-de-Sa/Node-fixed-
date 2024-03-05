"use strict";

// exports.messages = ["You are great!", "You can accomplish anything!", "Success is in your future!"];

const messageModule = require("./messages");
messageModule.messages.forEach(m => console.log(m));