import { EntityRepository } from "./entityrepository";

export interface IBaseController{
    get()
    getById(id: number)
}

export class BaseController<T extends { id: number }> implements IBaseController{
    public readonly repository: EntityRepository<T>
    public constructor(cls: { new(...parameters): T }) {
        this.repository = new EntityRepository<T>(cls)
    }

    get() {
        var r = this.repository.getAll();
        console.log(r);
        return r;
    }

    getById(id: number) {
        return this.repository.getById(id);
    }

    async add(entities:T|T[]){
        return await this.repository.create(entities)
    }

    async update(entities:T|T[]){
        return await this.repository.update(entities)
    }

    async remove(entities:T|T[]){
        return await this.repository.delete(entities)
    }
}

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