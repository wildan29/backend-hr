/**
 * This File Only For Service That Required Token Session
 */

// TODO 7 : Create Route For API

import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const privateRouter = express.Router();
privateRouter.use(authMiddleware);
privateRouter.get("/api/user/current", userController.get);

export { privateRouter };
