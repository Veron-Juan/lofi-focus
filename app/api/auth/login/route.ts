import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    await connect();

    const { username, email, password } = await request.json();

    if (password < 6)
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );

    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 409,
        }
      );

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    console.log(savedUser);

    return NextResponse.json(
      {
        username,
        email,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.error();
  }
}

// export const POST = async (request: Request) => {
//   const { email, password } = await request.json();

//   await connect();

//   // Buscar al usuario por nombre de usuario en la base de datos
//   const user = await User.findOne({ email });

//   // Verificar si el usuario existe y la contraseña es válida
//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     return new NextResponse("Credenciales inválidas", {
//       status: 401,
//     });
//   }

//   const token = jwt.sign(
//     {
//       userId: user._id,
//       username: user.username,
//       email: user.email,
//       // Agrega otros datos que desees incluir en el token
//     },
//     "clave_secreta",
//     {
//       expiresIn: "6h",
//     }
//   );

  
//   return new NextResponse(
//     JSON.stringify({ user, token }),
//     {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
      
      
//     }

    
//   );
// };