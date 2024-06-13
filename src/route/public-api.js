/**
 * This File Only For Service That Not Required Token Session
 */

// TODO 7 : Create Route For API

import express from "express";
import userController from "../controller/user-controller.js";

const publicRouter = express.Router();
publicRouter.post("/api/user/register", userController.register);

export { publicRouter };
