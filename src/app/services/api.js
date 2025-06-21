import axios from "axios";

export async function login(dni , password) {
  try {
    
    const response = await axios.post(`https://r371qrwuoj.execute-api.us-east-1.amazonaws.com/dev/login`, {
      body: JSON.stringify({
        dni: dni,
        contrasenia: password
      }),
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



export async function register(datos) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/register`, datos, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error en registro:", error);
    throw new Error("Error en registro");
  }
}