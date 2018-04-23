import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { user } from "./user";

@Entity("val_user_device", { schema: "public" })
export class device {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;

    @Column("text", {
        nullable: true,
        name: "platform"
    })
    platform: string;

    @ManyToOne(type => user, user => user.devices)
    @JoinColumn({ name: 'user_id' })
    user: user;
    
}
