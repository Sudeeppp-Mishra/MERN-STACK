import {Router} from "express";

let userRoutes = Router();

userRoutes
.route("/")
.post((req, res, next)=>{
    res.json("user created successfully!");
})
.get((req, res, next)=>{});

userRoutes
.route("/:id")
.get((req, res, next)=>{})
.patch((req, res, next)=>{})
.delete((req, res, next)=>{})

export default userRoutes;