import { Router } from "express";
import User from "../schema/userSchema.js";

let userRoutes = Router();

userRoutes
  .route("/") // localhost:8000/user
  .post(async (req, res, next) => {
    // put async here for putting in db
    //res.json("user created successfully!");
    /*
        send data from postman
        get data sent by postman
        store data in User table
    */

    // console.log(req.body) // get data in console
    let result = await User.create(req.body); // put await in front of table of db

    res.json({
      success: true,
      message: "Data added to User table successfully!",
      result: result,
    });
  })
  .get((req, res, next) => {});

userRoutes
  .route("/:id")
  .get((req, res, next) => {})
  .patch((req, res, next) => {})
  .delete((req, res, next) => {});

export default userRoutes;
