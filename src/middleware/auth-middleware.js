import { prismaClient } from "../application/database.js";
import { logger } from "../application/logging.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.get("api-key");

  // if token is not exist
  if (!token) {
    res
      .status(401)
      .json({
        errors: "Unauthorized",
      })
      .end();
  } else {
    const user = await prismaClient.pengguna.findFirst({
      where: {
        token: token,
      },
    });

    // if token is invalid
    if (!user) {
      res
        .status(401)
        .json({
          errors: "Unauthorized",
        })
        .end();
    } else {
      req.user = user;
      logger.warn(user);
      next();
    }
  }
};
