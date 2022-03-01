"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var getApplicableDataAsync_1 = require("./getApplicableDataAsync");
var ISEIForm = (function () {
    function ISEIForm() {
        var _a;
        this.exp = document.getElementById("exp-input");
        this.form = document.getElementById("form");
        this.list = document.getElementById("list");
        this.loading = document.getElementById("loading");
        this.name = document.getElementById("name-input");
        this.radioButtonValue = (_a = document.querySelector("input[name=special]:checked")) === null || _a === void 0 ? void 0 : _a.value;
        this.zip = document.getElementById("zip-input");
    }
    ISEIForm.prototype.setLoading = function (state) {
        if (this.loading)
            this.loading.style.display = state ? "inline" : "none";
    };
    ISEIForm.prototype.addListItem = function (value, fallback) {
        var _a;
        if (fallback === void 0) { fallback = "Unavailable"; }
        var node = document.createElement("li");
        var textnode = document.createTextNode(value || fallback);
        node.appendChild(textnode);
        (_a = this === null || this === void 0 ? void 0 : this.list) === null || _a === void 0 ? void 0 : _a.appendChild(node);
    };
    ISEIForm.prototype.updateListing = function (params) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var results, error_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, 3, 4]);
                        this.setLoading(true);
                        return [4, (0, getApplicableDataAsync_1.getApplicableDataAsync)(params)];
                    case 1:
                        results = _b.sent();
                        if (this.list)
                            this.list.innerHTML = "";
                        results.map(function (coachData) {
                            _this.addListItem(coachData.name, "Unavailable Name");
                        });
                        if (((_a = this === null || this === void 0 ? void 0 : this.list) === null || _a === void 0 ? void 0 : _a.innerHTML) === "") {
                            this.addListItem("No listings match your search");
                        }
                        return [3, 4];
                    case 2:
                        error_1 = _b.sent();
                        console.error(error_1);
                        return [3, 4];
                    case 3:
                        this.setLoading(false);
                        return [7];
                    case 4: return [2];
                }
            });
        });
    };
    ISEIForm.prototype.__init__ = function () {
        var _this = this;
        var _a, _b;
        (_a = this.form) === null || _a === void 0 ? void 0 : _a.addEventListener("keyup", function () {
            var _a, _b, _c;
            var params = {
                name: (_a = _this.name) === null || _a === void 0 ? void 0 : _a.value,
                yearsOfExperience: parseInt((_b = _this.exp) === null || _b === void 0 ? void 0 : _b.value),
                zip: (_c = _this.zip) === null || _c === void 0 ? void 0 : _c.value,
                specialization: [_this.radioButtonValue],
            };
            _this.updateListing(params);
        });
        (_b = this.form) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", function () {
            var _a, _b, _c;
            var params = {
                name: (_a = _this.name) === null || _a === void 0 ? void 0 : _a.value,
                yearsOfExperience: parseInt((_b = _this.exp) === null || _b === void 0 ? void 0 : _b.value),
                zip: (_c = _this.zip) === null || _c === void 0 ? void 0 : _c.value,
                specialization: [_this.radioButtonValue],
            };
            _this.updateListing(params);
        });
        document
            .querySelectorAll("input[name='special']")
            .forEach(function (input) {
            input.addEventListener("change", function () {
                var _a, _b, _c;
                var value = document.querySelector("input[name=special]:checked");
                _this.radioButtonValue = value === null || value === void 0 ? void 0 : value.value;
                var params = {
                    name: (_a = _this.name) === null || _a === void 0 ? void 0 : _a.value,
                    yearsOfExperience: parseInt((_b = _this.exp) === null || _b === void 0 ? void 0 : _b.value),
                    zip: (_c = _this.zip) === null || _c === void 0 ? void 0 : _c.value,
                    specialization: [_this.radioButtonValue],
                };
                _this.updateListing(params);
            });
        });
    };
    return ISEIForm;
}());
exports.default = ISEIForm;
