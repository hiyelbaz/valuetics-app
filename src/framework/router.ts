import { BaseController } from "./basecontroller";
import { Router, Request, Response, NextFunction } from "express";

// class Rule {
//     private method: () => boolean
//     constructor(method: () => boolean) {

//     }
// }

// class Role {
//     public roleName: string
//     public constructor(roleName: string) {
//         this.roleName = roleName
//     }
// }

// class Action {
//     public method: (req: Request, res: Response, next: NextFunction) => void
//     public constructor(method: (req: Request, res: Response, next: NextFunction) => void) {
//         this.method = method
//     }
// }



var controllerContext = {}
var routerSettings = {
    defaultLanguageLowerCase: "tr",
    defaultControllerLowerCase: "users",
}
var routerAdminParser = "/:lang([a-z]{2})?/:controller([a-z][a-z0-9\-]{0,})?/:action([a-z][a-z0-9\-]{0,})?/:id([0-9]+)?/:title?/"

export function createRouter(controllersImport: any): Router {
    //init all controllers
    for (var controllerName in controllersImport) {
        var controller = new controllersImport[controllerName]();
        //set lower-case functions (makes url ics)
        Object.getOwnPropertyNames(Object.getPrototypeOf(Object.getPrototypeOf(controller))).forEach((key, index) => {
            if (key !== "constructor" && controller[key.toLowerCase()] === undefined)
                controller[key.toLowerCase()] = controller[key]
        })
        controllerContext[controllerName.toLowerCase()] = controller;
    }
    var router = Router()


    // ROUTER IMPLEMENTATION
    //get
    router.get(routerAdminParser, async (req: Request, res: Response, next: NextFunction) => {
        var result: string

        var expectedController: BaseController<any> =
            req.params.controller ?
                controllerContext[req.params.controller.toLowerCase()] :
                controllerContext[routerSettings.defaultControllerLowerCase.toLowerCase()]

        if (expectedController) {
            if (req.params.action) {
                var actionName = "get" + req.params.action.toLowerCase()
                var expectedAction = expectedController[actionName]
                if (expectedAction) {
                    result = await (expectedController[actionName](req, res))
                } else {
                    res.sendStatus(404);
                }
            } else {
                result = await (expectedController["get"](req, res))
            }
            res.send(result)
        }
        else {
            res.sendStatus(404);
        }
    })

    //update
    router.post(routerAdminParser, async (req: Request, res: Response, next: NextFunction) => {
        var result: string

        var expectedController: BaseController<any> =
            req.params.controller ?
                controllerContext[req.params.controller.toLowerCase()] :
                controllerContext[routerSettings.defaultControllerLowerCase.toLowerCase()]

        if (expectedController) {
            if (req.params.action) {
                var actionName = "post" + req.params.action.toLowerCase()
                var expectedAction = expectedController[actionName]
                if (expectedAction) {
                    result = await (expectedController[actionName](req, res))
                } else {
                    res.sendStatus(404);
                }
            } else {
                result = await (JSON.stringify(expectedController.post(req, res)))
            }
            res.send(result)
        }
        else {
            res.sendStatus(404);
        }
    })

    //delete
    router.delete(routerAdminParser, async (req: Request, res: Response, next: NextFunction) => {

    })

    //create
    router.put(routerAdminParser, async (req: Request, res: Response, next: NextFunction) => {
        var result: string

        var expectedController: BaseController<any> =
            req.params.controller ?
                controllerContext[req.params.controller.toLowerCase()] :
                controllerContext[routerSettings.defaultControllerLowerCase.toLowerCase()]

        if (expectedController) {
            if (req.params.action) {
                var actionName = "put" + req.params.action.toLowerCase()
                var expectedAction = expectedController[actionName]
                if (expectedAction) {
                    result = await (expectedController[actionName](req, res))
                } else {
                    res.sendStatus(404);
                }
            } else {
                result = await (JSON.stringify(expectedController.put(req, res)))
            }
            res.send(result)
        }
        else {
            res.sendStatus(404);
        }
    })




    return router
}