import { Router } from "express";
import School from "../schema/schoolSchema.js";

let schoolRoute = Router();

schoolRoute
  .route("/")
  .post(async (req, res, next) => {
    try {
      let result = await School.create(req.body);

      res.json({
        success: true,
        message: "School created successfully!",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  })

  .get(async (req, res, next) => {
    try {
      let result = await School.find();

      res.json({
        success: true,
        message: "School read successfully!",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

schoolRoute
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      let result = await School.findById(req.params.id);

      res.json({
        success: true,
        message: "School read successfully!",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  })

  .patch(async (req, res, next) => {
    try {
      let result = await School.findByIdAndUpdate(req.params.id, req.body);

      res.json({
        success: true,
        message: "School update successfully!",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  })

  .delete(async (req, res, next) => {
    try {
      let result = await School.findByIdAndDelete(req.params.id, req.body);

      res.json({
        success: true,
        message: "School delete successfully!",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

export default schoolRoute;
