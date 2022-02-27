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
/**
 * Function for getting the applicable data based on parameters
 *
 * @author Edward Thomas
 * ------------------------------------------
 * @description
 * Function meant for explaining the logic of a search directory
 * asynchronously. The point of the asynchronous action is to run
 * this function every time the user presses a key. The search
 * will therefore remain synced with the user typing.
 * ------------------------------------------
 * @license GNU
 * @todo
 * - Zip code logic
 * - ~
 *
 * @param - User's current search field value(s)
 *
 * @async
 * @returns `typeof Promise<SearchField[]>` - All searches that match users credentials
 *
 */
function getApplicableDataAsync(_a) {
    var name = _a.name, specialization = _a.specialization, zip = _a.zip, yearsOfExperience = _a.yearsOfExperience;
    return __awaiter(this, void 0, void 0, function () {
        var allCoachData, applicableSearchResults;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, [
                        {
                            name: "Amy Sargent",
                            specialization: ["Family"],
                            zip: "80634",
                            yearsOfExperience: 5,
                        },
                    ]];
                case 1:
                    allCoachData = _b.sent();
                    applicableSearchResults = [];
                    allCoachData.map(function (coachData) {
                        var coachName = coachData.name, coachSpecialization = coachData.specialization, coachZip = coachData.zip, coachYearsOfExperience = coachData.yearsOfExperience;
                        // May need a try/catch block for `null` parameters
                        if (coachName && name && coachName.includes(name)) {
                            applicableSearchResults.push(coachData);
                        }
                        if (specialization &&
                            coachSpecialization &&
                            specialization.find(function (special) { return coachSpecialization.includes(special); })) {
                            applicableSearchResults.push(coachData);
                        }
                        /**
                         * Zip code will need some more logic to check what's considered "close"
                         * for a zip code. Shouldn't be hard from the description below.
                         *
                         * ZIP Codes are numbered with the first digit representing a certain group
                         * of U.S. states, the second and third digits together representing a region
                         * in that group (or perhaps a large city) and the fourth and fifth digits
                         * representing a group of delivery addresses within that region.
                         */
                        if (coachZip && zip && coachZip.includes(zip)) {
                            applicableSearchResults.push(coachData);
                        }
                        if (coachYearsOfExperience &&
                            yearsOfExperience &&
                            yearsOfExperience <= coachYearsOfExperience) {
                            applicableSearchResults.push(coachData);
                        }
                    });
                    return [2 /*return*/, applicableSearchResults];
            }
        });
    });
}
