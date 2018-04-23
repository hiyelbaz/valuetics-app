import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { device } from "./device";
import { individual } from "./individual";
import { notification } from "./notification";
import { role } from "./role";

@Entity("val_user", { schema: "public" })
export class user {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;

    @Column("text", {
        nullable: false,
        name: "name"
    })
    name: string;

    @ManyToMany(type => role)
    @JoinTable({
        name: "val_user_val_roles_val_role",
        joinColumn: { name: "val_user_id" },
        inverseJoinColumn: { name: "val_role_id" }
    })
    roles: role[]

    @OneToMany(type => device, devices => devices.user)
    devices: device[];

    @OneToMany(type => individual, individuals => individuals.user_id)
    individuals: individual[];

    @OneToMany(type => notification, notifications => notifications.user_id)
    notifications: notification[];

}
