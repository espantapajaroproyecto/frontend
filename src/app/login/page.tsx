// app/login/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import AuthForm from "@/components/auth-form";
import { login } from "../services/api";
import { validarDni, validarPassword } from "@/lib/validaciones";

export default function Page() {
  const campos = [
    { name: "dni", label: "DNI", type: "number", placeholder: "12345678", validator: validarDni },
    { name: "password", label: "Contraseña", type: "password", placeholder: "••••••••", validator: validarPassword },
  ];

  const handleLogin = async (datos: Record<string, string>) => {
    try {
      const resultado = await login(datos.dni, datos.password);
      console.log("Resultado login:", resultado);
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  return (
    
      <AuthForm
        campos={campos}
        onSubmit={handleLogin}
        titulo="Ingresar a tu cuenta"
        textoBoton="Iniciar sesión"
        textoPie={
          <>
            ¿No tenés una cuenta aún?{" "}
            <Link
              href="/home/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Registrate!
            </Link>
          </>
        }
      />
   
  );
}
