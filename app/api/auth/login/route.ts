import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  await connect();

  // Buscar al usuario por nombre de usuario en la base de datos
  const user = await User.findOne({ email });

  // Verificar si el usuario existe y la contraseña es válida
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return new NextResponse("Credenciales inválidas", {
      status: 401,
    });
  }

  // Generar un token de autenticación para el usuario
//   const token = jwt.sign({ userId: user._id }, "clave_secreta", {
//     expiresIn: "1h",
//   });

  return new NextResponse(
    JSON.stringify({ user }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      
      
    }

    
  );
};