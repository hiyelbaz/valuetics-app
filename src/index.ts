import "reflect-metadata";
import express, { Request, Response } from "express"; // web framework
import path from "path";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser"; // parser (model binder?)
import { createConnection, Connection, getConnection, getManager } from "typeorm";
import * as controllers from "./controllers"
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { BaseController, IBaseController } from "./basecontroller";
import { user } from "./entities/user";


createConnection().then(async connection => {

    const rep1 = getManager().getRepository(user);
    var result1 = await rep1.find()

    const app = express();
    app.set("port", 3000);
    // app.set("views", path.join(__dirname, "views"));
    // app.set("view engine", "pug");
    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "/../public"), { maxAge: 31557600000 }));

    //init all controllers
    //     var c: any = {}
    // for (var controller in controllers) {
    //     c[controller.toLowerCase()] = new controllers[controller]();
    // }

    //Router
    app.put("/:lang([a-z]{2})?/:controller([a-z][a-z0-9\-]{0,})?/:action([a-z][a-z0-9\-]{0,})?/:id([0-9]+)?/:title?/", function (req, res) {

    })

    //read
    app.get("/:lang([a-z]{2})?/:controller([a-z][a-z0-9\-]{0,})?/:action([a-z][a-z0-9\-]{0,})?/:id([0-9]+)?/:title?/", async function (req: Request, res: Response) {
        // (<BaseController<{ id: number }>>c[req.params.controller.toLowerCase()]).get()
        //     .then(result => { res.send(result) })
        // var r = await u.getById(1).toPromise()
        // var u = new controllers.Users().repository
        // var r = JSON.stringify(await u.getAll().include(u => u.roles));

        const rep = getManager().getRepository(user);
        var result = await rep.find()
        res.send(result);
    })

    //update
    app.post("/:lang([a-z]{2})?/:controller([a-z][a-z0-9\-]{0,})?/:action([a-z][a-z0-9\-]{0,})?/:id([0-9]+)?/:title?/", function (req, res) {

    })

    //delete
    app.delete("/:lang([a-z]{2})?/:controller([a-z][a-z0-9\-]{0,})?/:action([a-z][a-z0-9\-]{0,})?/:id([0-9]+)?/:title?/", function (req, res) {

    })

    // console.log(JSON.stringify(await users.getAll().include(u => u.roles)))
    // console.log(JSON.stringify(await roles.getAll().include(u => u.users)))
    connection.close()
    app.listen(3000)

}).catch(error => {
    console.log(JSON.stringify(error.message))
});

