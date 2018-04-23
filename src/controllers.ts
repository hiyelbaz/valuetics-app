import {answer} from "./entities/answer"
import {individual} from "./entities/individual"
import {individual_photo} from "./entities/individual_photo"
import {notification} from "./entities/notification"
import {observation} from "./entities/observation"
import {plant_functional_type} from "./entities/plant_functional_type"
import {question} from "./entities/question"
import {site} from "./entities/site"
import {species} from "./entities/species"
import {species_photo} from "./entities/species_photo"
import {role} from "./entities/role"
import {user} from "./entities/user"
import {device} from "./entities/device"
import { BaseController } from "./basecontroller";

export class Users extends BaseController<user>{
    public constructor() {
        super(user);
    }
}

export class Roles extends BaseController<role>{
    public constructor() {
        super(role);
    }
}

export class Devices extends BaseController<device>{
    public constructor() {
        super(device);
    }
}

export class Answers extends BaseController<answer>{
    public constructor() {
        super(answer);
    }
}

export class Individuals extends BaseController<individual>{
    public constructor() {
        super(individual);
    }
}

export class IndividualPhotos extends BaseController<individual_photo>{
    public constructor() {
        super(individual_photo);
    }
}

export class Notifications extends BaseController<notification>{
    public constructor() {
        super(notification);
    }
}

export class Observation extends BaseController<observation>{
    public constructor() {
        super(observation);
    }
}

export class PlantFunctionalTypes extends BaseController<plant_functional_type>{
    public constructor() {
        super(plant_functional_type);
    }
}

export class Questions extends BaseController<question>{
    public constructor() {
        super(question);
    }
}

export class Sites extends BaseController<site>{
    public constructor() {
        super(site);
    }
}

export class SpeciesPhotos extends BaseController<species_photo>{
    public constructor() {
        super(species_photo);
    }
}

export class Species extends BaseController<species>{
    public constructor() {
        super(species);
    }
}
