"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var form = document.getElementById("form");
form === null || form === void 0 ? void 0 : form.addEventListener("keydown", function (event) {
    var target = event.target;
    console.log(target === null || target === void 0 ? void 0 : target.value);
    return;
});
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
    event.preventDefault();
});
