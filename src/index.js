"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("Hello from TS");
});
var PORT = 4200;
app.listen(PORT, function () {
    console.log("Server start at http://locahost:".concat(PORT));
});
