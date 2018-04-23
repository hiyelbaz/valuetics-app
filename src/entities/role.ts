import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, JoinTableOptions } from "typeorm";
import { user } from "./user";


@Entity("val_role", { schema: "public" })
export class role {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;


    @Column("text", {
        nullable: true,
        name: "name"
    })
    name: string;

    @ManyToMany(type => user, user => user.roles)
    @JoinTable({
        name:"val_user_val_roles_val_role",
        joinColumn:{name:"val_role_id"},
        inverseJoinColumn:{name:"val_user_id"}
    })
    users: user[];

}
