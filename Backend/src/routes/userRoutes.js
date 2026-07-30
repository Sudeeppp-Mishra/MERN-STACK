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
    try {
      let result = await User.create(req.body); // put await in front of table of db

      res.json({
        success: true,
        message: "Data added to User table successfully!",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: `Err: ${error.message}`,
      });
    }
  })

  .get(async(req, res, next) => {
    try{
        let result = await User.find();
        res.json({
            success: true,
            message: "User read successfully!",
            result: result
        })
    } catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
  });

userRoutes
  .route("/:id") // localhost:8000/:id or anything or <id> that we want to get or update or what
  .get(async(req, res, next) => {
    //console.log(req.params.id) // to get id in console
    try{
        let result = await User.findById(req.params.id)
        res.json({
            success: true,
            message: "User read successfully!",
            result: result
        })
    } catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
  })
  .patch(async(req, res, next) => {
        try{
        let result = await User.findByIdAndUpdate(req.params.id, req.body) // we need (id, data)and data is get by the postman body where we will be updating things
        res.json({
            success: true,
            message: "User update successfully!",
            result: result
        })
    } catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
  })
  .delete(async(req, res, next) => {
        try{
        let result = await User.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: "User delete successfully!",
            result: result
        })
    } catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
  });

export default userRoutes;
