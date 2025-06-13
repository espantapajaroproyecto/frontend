export function validarDni(value: string): string | null {
  if (!value) return "El DNI es obligatorio";
  if (!/^\d{7,8}$/.test(value)) return "DNI debe tener 7 u 8 dígitos numéricos";
  return null;
}

export function validarNombre(value: string): string | null {
  if (!value) return "El nombre es obligatorio";
  if (value.length < 2) return "El nombre es muy corto";
  return null;
}

export function validarApellido(value: string): string | null {
  if (!value) return "El apellido es obligatorio";
  if (value.length < 2) return "El apellido es muy corto";
  return null;
}

export function validarEmail(value: string): string | null {
  if (!value) return "El email es obligatorio";
  // regex simple para email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) return "Formato de email inválido";
  return null;
}

export function validarCelular(value: string): string | null {
  if (!value) return "El celular es obligatorio";
  // Celular argentino: debe empezar con 15 o 11 o 9 seguido de 8 a 10 números (simplificado)
  const regex = /^((\+54)?(9)?(11|[2368]\d{2}))?(\d{6,8})$/;
  if (!regex.test(value)) return "Formato de celular argentino inválido";
  return null;
}

export function validarPassword(value: string): string | null {
  if (!value) return "La contraseña es obligatoria";
  if (value.length < 6) return "La contraseña debe tener al menos 6 caracteres";
  return null;
}
