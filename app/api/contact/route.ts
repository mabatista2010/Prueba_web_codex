import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { message: "Datos inválidos." },
      { status: 400 }
    );
  }

  const { name, email, message } = body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  if (!isEmailValid) {
    return NextResponse.json(
      { message: "El correo ingresado no es válido." },
      { status: 400 }
    );
  }

  return NextResponse.json({ status: "ok" });
}
