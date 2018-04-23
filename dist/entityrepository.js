"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_linq_repository_1 = require("typeorm-linq-repository");
require("reflect-metadata");
class EntityRepository extends typeorm_linq_repository_1.RepositoryBase {
    constructor(cls) {
        super(cls);
    }
}
exports.EntityRepository = EntityRepository;
//# sourceMappingURL=entityrepository.js.map