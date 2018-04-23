// import express from "express"
// import passport from "passport"
// import { Strategy as LocalStrategy, IVerifyOptions } from "passport-local"
// import bcrypt from "bcrypt"
// import pg from "pg"
// class Entity {
//     id?:number
//     displayName?:string
// }
// class 
// class Repository<T> 
// passport.use(new LocalStrategy((username, password, done) => {
//     User.findOne({ username: username }, (err, user) => {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//     });
// }))
// class PostgresLocal {
//     pool: pg.Pool
//     constructor(pool: pg.Pool) {
//         this.pool = pool
//     }
//     localStrategy(username: string, password: string, cb: any) {
//         this.pool.connect((err, client, release) => {
//             if (err) {
//                 console.log('Error acquiring client', err.stack);
//                 return cb(err);
//             }
//             client.query('SELECT id, username, password FROM users WHERE username=$1', [username], (err, result) => {
//                 if (err) {
//                     console.log('Error when selecting user on login', err);
//                     return cb(err);
//                 }
//                 if (result.rows.length > 0) {
//                     const first = result.rows[0];
//                     bcrypt.compare(password, first.password, function (err, res) {
//                         if (res) {
//                             cb(null, { id: first.id, username: first.username });
//                         } else {
//                             cb(null, false);
//                         }
//                     })
//                 } else {
//                     cb(null, false);
//                 }
//             });
//         });
//     }
//     serializeUser(user: User, done: any) {
//         done(null, user.id);
//     }
//     deserializeUser(id: number, cb: any) {
//         this.pool.connect((err, client, release) => {
//             if (err) {
//                 console.log('Error acquiring client', err.stack);
//                 return cb(err);
//             }
//             client.query('SELECT id, username FROM users WHERE id = $1', [id], (err, results) => {
//                 client.release();
//                 if (err) {
//                     console.log('Error when selecting user on session deserialize', err);
//                     return cb(err);
//                 }
//                 cb(null, results.rows[0]);
//             })
//         });
//     }
// }
// const app = express();
// const pool = new pg.Pool()
//# sourceMappingURL=app.js.map