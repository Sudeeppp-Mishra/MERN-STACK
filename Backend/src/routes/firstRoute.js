// make route 
// use that route at index.js

import { Router } from "express";

let firstRoute = Router();



/*
    localhost:8000, get => a
    localhost:8000, post => b

    localhost:8000/job, get => c
*/

firstRoute
    .route("/")
    .get((req, res, next)=>{
        console.log(req.body)
        console.log("a");
    })
    .post((req, res, next)=>{
        console.log("b");
    });

firstRoute
    .route("/job")
    .get((req, res, next)=>{
        console.log("c");
    });

firstRoute
    .route("/:id") // when I put : (colon) it will become dynamic
    .get((req, res, next)=>{
        console.log("Dynamic Params!")
    })

firstRoute
    .route("/:id/a/:id2") // we need to put localhost:8000/<anything>/a/<anything>
    .get((req, res, next)=>{
        console.log(req.params) // to get dynamic params-> eg: if I give localhost:8000/😁/a/😁 o/p:[Object: null prototype] { id: '😁', id2: '😁' }
        console.log("Dynamic Params!")
    })
export default firstRoute;