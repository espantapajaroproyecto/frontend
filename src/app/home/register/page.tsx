// app/home/register/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import AuthForm from "@/components/auth-form";
import { register } from "../../services/api";
import {
  validarDni,
  validarNombre,
  validarApellido,
  validarEmail,
  validarCelular,
  validarPassword,
} from "@/lib/validaciones";

export default function Page() {
  const campos = [
    { name: "dni", label: "DNI", type: "number", placeholder: "12345678", validator: validarDni },
    { name: "nombre", label: "Nombre", type: "text", placeholder: "Juan", validator: validarNombre },
    { name: "apellido", label: "Apellido", type: "text", placeholder: "Pérez", validator: validarApellido },
    { name: "celular", label: "Celular", type: "text", placeholder: "+54911XXXXXXX", validator: validarCelular },
    { name: "mail", label: "Email", type: "email", placeholder: "ejemplo@mail.com", validator: validarEmail },
    { name: "password", label: "Contraseña", type: "password", placeholder: "••••••••", validator: validarPassword },
  ];

  const handleRegister = async (datos: Record<string, string>) => {
    try {
      const resultado = await register(datos);
      console.log("Resultado registro:", resultado);
    } catch (error) {
      console.error("Error en registro:", error);
    }
  };

  return (
      <AuthForm
        campos={campos}
        onSubmit={handleRegister}
        titulo="Crear una cuenta"
        textoBoton="Registrarse"
        textoPie={
          <>
            ¿Ya tenés una cuenta?{" "}
            <Link
              href="/login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Iniciá sesión!
            </Link>
          </>
        }
      />
  );
}
