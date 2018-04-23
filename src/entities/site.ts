import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { individual } from "./individual";

@Entity("site", { schema: "public" })
export class site {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;

    @Column("jsonb", {
        nullable: true,
        name: "name"
    })
    name: Object;

    @Column("jsonb", {
        nullable: true,
        name: "description"
    })
    description: Object;

    @Column("point", {
        nullable: true,
        name: "location"
    })
    location: string | Object;

    @OneToMany(type => individual, individuals => individuals.site_id)
    individuals: individual[];

}
