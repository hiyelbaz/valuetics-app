import { getRepository, Repository, DeepPartial, getConnection } from "typeorm";
import { Request, Response } from "express";
import { user } from "../entities/user";

export class BaseController<T extends { id: number }> {
    public readonly repository: Repository<T>
    public constructor(entity: { new(...parameters) }) {
        this.repository = getRepository(entity)
    }

    async get(req: Request, res: Response) {
        var query
        if (req.params.id) {
            query = await this.repository.findByIds([req.params.id]).catch(err => { console.log(err.message) })
        } else {
            query = await this.repository.find().catch(err => { console.log(err.message) })
            // if (p1) {
            //     //TODO: implement query options
            // }
            // if (p2) {
            //     //TODO: implement paging options
            // }
        }
        return query
    }

    async getTest() {
        return getConnection("readonly").createQueryBuilder(user,"user2")
        .select(["user2.name","role2.name"])
        .leftJoin("user2.roles","role2")
        .getMany();
        // return { name: "Burak Büyükatlı" }
    }

    //insert
    async put(req: Request, res: Response) {
        var entity = req.body;
        if (entity instanceof Array)
            return await this.repository.save(entity)
        return await this.repository.save(entity)
    }

    //update
    async post(req: Request, res: Response) {
        var entity = req.body;
        // if (entity instanceof Array)
        //     return await this.repository.save(entity)
        return await this.repository.save(entity)
        
        //getbyid
        //update

        // return 1 
    }

    // remove(entities: T | T[]) {
    //     return this.repository.delete(entities)
    // }
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