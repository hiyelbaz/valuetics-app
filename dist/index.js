"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser")); // parser (model binder?)
var typeorm_1 = require("typeorm");
require("reflect-metadata");
var router_1 = require("./framework/router");
var controllersImport = __importStar(require("./controllers"));
Promise.all([typeorm_1.createConnection("default"), typeorm_1.createConnection("readonly")]).then(function (connections) {
    // var client: Client = connections[0].driver[connections[0].]
    var app = express_1.default();
    app.set("port", 3000);
    // app.set("views", path.join(__dirname, "views"))
    // app.set("view engine", "pug")
    // app.use(compression())
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.static(path_1.default.join(__dirname, "/../public"), { maxAge: 31557600000 }));
    app.use("/admin", router_1.createRouter(controllersImport));
    app.listen(3000);
}).catch(function (err) {
    console.log((err.message));
});
//# sourceMappingURL=index.js.map