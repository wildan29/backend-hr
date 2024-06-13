// Create service for user api

// TODO 5 : Create Service

import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt";

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  // cek user register or no
  const countUser = await prismaClient.pengguna.count({
    where: {
      OR: [
        {
          username: user.username,
        },
        {
          email: user.email,
        },
      ],
    },
  });

  // throw error if username or email i alread registered
  if (countUser === 1)
    throw new ResponseError(400, "Username or Email already registered");

  // Hash password using bcrypt
  user.password = await bcrypt.hash(user.password, 10);

  // create account in prisma
  await prismaClient.pengguna.create({
    data: user,
  });

  return {
    message: "Account created successfully",
  };
};

export default {
  register,
};
