
import express, { Request, Response, NextFunction, Router } from "express"
import path from "path"
import compression from "compression" // compresses requests
import bodyParser from "body-parser" // parser (model binder?)
import { createConnection } from "typeorm"
import "reflect-metadata"
import { createRouter } from "./framework/router"
import * as controllersImport from "./controllers"
import { Client } from "pg"

Promise.all([createConnection("default"), createConnection("readonly")]).then((connections) => {
    // var client: Client = connections[0].driver[connections[0].]
    const app = express()
    app.set("port", 3000)
    // app.set("views", path.join(__dirname, "views"))
    // app.set("view engine", "pug")
    // app.use(compression())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static(path.join(__dirname, "/../public"), { maxAge: 31557600000 }))
    app.use("/admin", createRouter(controllersImport))
    app.listen(3000)
}).catch(err => {
    console.log((err.message))
})



