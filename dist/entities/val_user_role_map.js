// import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
// import { val_role } from "./val_role";
// @Entity("val_user_role_map", { schema: "public" })
// @Index("fki_role_id_fkey", ["role_id",])
// @Index("fki_user_id_fkey", ["user_id",])
// export class val_user_role_map {
//     @Column("integer", {
//         nullable: false,
//         primary: true,
//         name: "user_id"
//     })
//     user_id: number;
//     @OneToOne(type => val_role, role => role.val_user_role_map)
//     @JoinColumn({ name: 'role_id' })
//     role_id: val_role;
// }
//# sourceMappingURL=val_user_role_map.js.map