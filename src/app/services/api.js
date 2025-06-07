import axios from "axios";

export async function login(dni, password) {
  try {
    console.log(process.env.API_BASE_URL);
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, {
      body: {
        dni: dni,
        password: password
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error en login");
  }
}
