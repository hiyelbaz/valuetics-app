"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_linq_repository_1 = require("typeorm-linq-repository");
const entities_1 = require("../entities/entities");
class Users extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.val_user);
    }
}
exports.Users = Users;
class Roles extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.val_role);
    }
}
exports.Roles = Roles;
class Devices extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.val_user_device);
    }
}
exports.Devices = Devices;
class Answers extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.answer);
    }
}
exports.Answers = Answers;
class Individuals extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.individual);
    }
}
exports.Individuals = Individuals;
class IndividualPhotos extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.individual_photo);
    }
}
exports.IndividualPhotos = IndividualPhotos;
// import {answer,individual,individual_photo,notification,observation,plant_functional_type,question,site,species,species_photo,val_role,val_user,val_user_device} from "../entities/entities"
class Notifications extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.notification);
    }
}
exports.Notifications = Notifications;
class Observation extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.observation);
    }
}
exports.Observation = Observation;
class PlantFunctionalTypes extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.plant_functional_type);
    }
}
exports.PlantFunctionalTypes = PlantFunctionalTypes;
class Questions extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.question);
    }
}
exports.Questions = Questions;
class Sites extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.site);
    }
}
exports.Sites = Sites;
class SpeciesPhotos extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.species_photo);
    }
}
exports.SpeciesPhotos = SpeciesPhotos;
class Species extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(entities_1.species);
    }
}
exports.Species = Species;
//# sourceMappingURL=UserRepository.js.map