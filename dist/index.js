"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express")); // web framework
const path_1 = __importDefault(require("path"));
const compression_1 = __importDefault(require("compression")); // compresses requests
const body_parser_1 = __importDefault(require("body-parser")); // parser (model binder?)
const typeorm_1 = require("typeorm");
const user_1 = require("./entities/user");
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    const rep1 = typeorm_1.getManager().getRepository(user_1.user);
    var result1 = yield rep1.find();
    const app = express_1.default();
    app.set("port", 3000);
    // app.set("views", path.join(__dirname, "views"));
    // app.set("view engine", "pug");
    app.use(compression_1.default());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.static(path_1.default.join(__dirname, "/../public"), { maxAge: 31557600000 }));
    //init all controllers
    //     var c: any = {}
    // for (var controller in controllers) {
    //     c[controller.toLowerCase()] = new controllers[controller]();
    // }
    //Router
    app.put("/:lang([a-z]{2})?/:controller([a-z][a-z0-9\-]{0,})?/:action([a-z][a-z0-9\-]{0,})?/:id([0-9]+)?/:title?/", function (req, res) {
    });
    //read
    app.get("/:lang([a-z]{2})?/:controller([a-z][a-z0-9\-]{0,})?/:action([a-z][a-z0-9\-]{0,})?/:id([0-9]+)?/:title?/", function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // (<BaseController<{ id: number }>>c[req.params.controller.toLowerCase()]).get()
            //     .then(result => { res.send(result) })
            // var r = await u.getById(1).toPromise()
            // var u = new controllers.Users().repository
            // var r = JSON.stringify(await u.getAll().include(u => u.roles));
            const rep = typeorm_1.getManager().getRepository(user_1.user);
            var result = yield rep.find();
            res.send(result);
        });
    });
    //update
    app.post("/:lang([a-z]{2})?/:controller([a-z][a-z0-9\-]{0,})?/:action([a-z][a-z0-9\-]{0,})?/:id([0-9]+)?/:title?/", function (req, res) {
    });
    //delete
    app.delete("/:lang([a-z]{2})?/:controller([a-z][a-z0-9\-]{0,})?/:action([a-z][a-z0-9\-]{0,})?/:id([0-9]+)?/:title?/", function (req, res) {
    });
    // console.log(JSON.stringify(await users.getAll().include(u => u.roles)))
    // console.log(JSON.stringify(await roles.getAll().include(u => u.users)))
    connection.close();
    app.listen(3000);
})).catch(error => {
    console.log(JSON.stringify(error.message));
});
//# sourceMappingURL=index.js.map