import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request:Request) => {
  const { username, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error:any) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};