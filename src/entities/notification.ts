import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { user } from "./user";


@Entity("notification", { schema: "public" })
@Index("fki_notification_user_id_fkey", ["user_id",])
export class notification {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;

    @ManyToOne(type => user, user => user.notifications)
    @JoinColumn({ name: 'user_id' })
    user_id: user;

    @Column("text", {
        nullable: true,
        name: "title"
    })
    title: string;

    @Column("text", {
        nullable: true,
        name: "text"
    })
    text: string;

    @Column("date", {
        nullable: true,
        name: "date"
    })
    date: string;

}
