"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TmdbApiTimeoutError = exports.TmdbApiError = exports.TmdbApiEnvironment = exports.TmdbApiClient = exports.TmdbApi = void 0;
exports.TmdbApi = __importStar(require("./api/index.js"));
var Client_js_1 = require("./Client.js");
Object.defineProperty(exports, "TmdbApiClient", { enumerable: true, get: function () { return Client_js_1.TmdbApiClient; } });
var environments_js_1 = require("./environments.js");
Object.defineProperty(exports, "TmdbApiEnvironment", { enumerable: true, get: function () { return environments_js_1.TmdbApiEnvironment; } });
var index_js_1 = require("./errors/index.js");
Object.defineProperty(exports, "TmdbApiError", { enumerable: true, get: function () { return index_js_1.TmdbApiError; } });
Object.defineProperty(exports, "TmdbApiTimeoutError", { enumerable: true, get: function () { return index_js_1.TmdbApiTimeoutError; } });
