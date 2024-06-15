// Create service for user api

// TODO 5 : Create Service

import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import {
  getUserValidation,
  loginUserValidation,
  registerUserValidation,
} from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

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

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  // cek if user is exsit or no
  const user = await prismaClient.pengguna.findFirst({
    where: {
      OR: [
        {
          username: loginRequest.username,
        },
        {
          email: loginRequest.username,
        },
      ],
    },
    select: {
      username: true,
      email: true,
      password: true,
    },
  });

  if (!user) {
    throw new ResponseError(
      401,
      "Invalid credentials. Please check your username/email and password.",
    );
  }

  // check password with bcyrpt
  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password,
  );

  // if validation password failed
  if (!isPasswordValid) {
    throw new ResponseError(
      401,
      "Invalid credentials. Please check your username/email and password.",
    );
  }

  // create token with uuid
  const token = uuid().toString();

  return prismaClient.pengguna.update({
    data: {
      token: token,
    },
    where: {
      username: user.username,
    },
    select: {
      token: true,
      role: true,
    },
  });
};

const get = async (username) => {
  // validasi id_admin
  username = validate(getUserValidation, username);

  const user = await prismaClient.pengguna.findUnique({
    where: {
      username: username,
    },
    select: {
      username: true,
      foto: true,
      email: true,
    },
  });

  if (!user) {
    throw new ResponseError(404, "user is not found");
  }

  return user;
};

export default {
  register,
  login,
  get,
};
