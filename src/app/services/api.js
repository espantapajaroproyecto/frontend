import axios from "axios";

export async function login(dni, password) {
  try {
    console.log(process.env.API_BASE_URL);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}login`, {
      body: JSON.stringify({
        dni: dni,
        contrasenia: password
      })
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error en login");
  }
}
