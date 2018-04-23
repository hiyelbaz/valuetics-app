"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const entityrepository_1 = require("./entityrepository");
class BaseController {
    constructor(cls) {
        this.repository = new entityrepository_1.EntityRepository(cls);
    }
    get() {
        var r = this.repository.getAll();
        console.log(r);
        return r;
    }
    getById(id) {
        return this.repository.getById(id);
    }
    add(entities) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.create(entities);
        });
    }
    update(entities) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.update(entities);
        });
    }
    remove(entities) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.delete(entities);
        });
    }
}
exports.BaseController = BaseController;
//Sample polimorphism
// class A {
//     getSomething(name: string): number {
//         return 1;
//     }
// }
// class B extends A {
//     getSomething(name: string): number;
//     getSomething(n: number, name: string): number;
//     getSomething(n: any, name?: any): any {
//         if (typeof name !== "string") {
//             return super.getSomething(n);
//         }
//         return 2;
//     }
// }
//# sourceMappingURL=basecontroller.js.map