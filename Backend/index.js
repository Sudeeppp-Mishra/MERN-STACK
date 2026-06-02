/*
    make express application
    attach port to it
*/

import express, { json } from "express";
import firstRoute from "./src/routes/firstRoute.js";
import productRoute from "./src/routes/productRoute.js";
import userRoutes from "./src/routes/userRoutes.js";
import mongoose from "mongoose";
let app = express();

app.listen(8000, () => {
    console.log("Application is listening at port 8000!");
    mongoose.connect("mongodb://localhost:27017")
});

/*

DD operations (CRUD)

Create -> post
Read -> get
Update -> patch
Delete -> delete

*/

/*
app.post("/", (req, res, next)=>{ // "/" means "localhost:port" i.e., "localhost:8000"
    console.log("Post Method");
});

app.get("/", (req, res, next)=>{
    console.log("Get Method");
});

app.patch("/", (req, res, next)=>{
    console.log("Patch Method");
});

app.delete("/", (req, res, next)=>{ // these are basically apis
    console.log("Delete Method");
});

app.get("/test/test1", (req, res, next)=>{
    console.log("Testing...");
});
*/

app.use(json()); // it makes our system/backend capable to take json data
app.use(firstRoute);

app.use("/product", productRoute);
app.use("/user", userRoutes)