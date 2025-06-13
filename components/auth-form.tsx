// "use client";
// import React, { useState } from "react";

// interface Campo {
//   name: string;
//   label: string;
//   type: string;
//   placeholder?: string;
//   validator?: (value: string) => string | null;
// }

// interface AuthFormProps {
//   campos: Campo[];
//   onSubmit: (datos: Record<string, string>) => Promise<void>;
//   titulo: string;
//   textoBoton: string;
//   textoPie?: React.ReactNode;
// }

// export default function AuthForm({ campos, onSubmit, titulo, textoBoton, textoPie }: AuthFormProps) {
//   const [valores, setValores] = useState<Record<string, string>>(
//     campos.reduce((acc, campo) => {
//       acc[campo.name] = "";
//       return acc;
//     }, {} as Record<string, string>)
//   );

//   const [errores, setErrores] = useState<Record<string, string | null>>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValores({ ...valores, [e.target.name]: e.target.value });
//     if (errores[e.target.name]) {
//       setErrores({ ...errores, [e.target.name]: null });
//     }
//   };

//   const validar = (): boolean => {
//     const nuevosErrores: Record<string, string | null> = {};
//     campos.forEach(({ name, validator }) => {
//       if (validator) {
//         nuevosErrores[name] = validator(valores[name]);
//       } else {
//         nuevosErrores[name] = null;
//       }
//     });
//     setErrores(nuevosErrores);
//     return !Object.values(nuevosErrores).some((error) => error !== null);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validar()) return;
//     await onSubmit(valores);
//   };

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div className="mb-6 text-center">
//           <h1 className="text-2xl font-bold text-pink-700 dark:text-pink-400">
//             Espacio Espantapájaros
//           </h1>
//         </div>
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               {titulo}
//             </h1>
//             <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} noValidate>
//               {campos.map(({ name, label, type, placeholder }, i) => (
//                 <div key={i}>
//                   <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                     {label}
//                   </label>
//                   <input
//                     type={type}
//                     id={name}
//                     name={name}
//                     placeholder={placeholder}
//                     value={valores[name]}
//                     onChange={handleChange}
//                     required
//                     className={`bg-gray-50 border ${
//                       errores[name] ? "border-red-500" : "border-gray-300"
//                     } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
//                   />
//                   {errores[name] && (
//                     <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errores[name]}</p>
//                   )}
//                 </div>
//               ))}

//               <button
//                 type="submit"
//                 className="w-full text-white bg-pink-600 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//               >
//                 {textoBoton}
//               </button>
//               {textoPie && (
//                 <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-2">{textoPie}</p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useState } from "react";

interface Campo {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  validator?: (value: string) => string | null;
}

interface AuthFormProps {
  campos: Campo[];
  onSubmit: (datos: Record<string, string>) => Promise<void>;
  titulo: string;
  textoBoton: string;
  textoPie?: React.ReactNode;
}

export default function AuthForm({ campos, onSubmit, titulo, textoBoton, textoPie }: AuthFormProps) {
  const [valores, setValores] = useState<Record<string, string>>(
    campos.reduce((acc, campo) => {
      acc[campo.name] = "";
      return acc;
    }, {} as Record<string, string>)
  );

  const [errores, setErrores] = useState<Record<string, string | null>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValores({ ...valores, [e.target.name]: e.target.value });
    if (errores[e.target.name]) {
      setErrores({ ...errores, [e.target.name]: null });
    }
  };

  const validar = (): boolean => {
    const nuevosErrores: Record<string, string | null> = {};
    campos.forEach(({ name, validator }) => {
      if (validator) {
        nuevosErrores[name] = validator(valores[name]);
      } else {
        nuevosErrores[name] = null;
      }
    });
    setErrores(nuevosErrores);
    return !Object.values(nuevosErrores).some((error) => error !== null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;
    await onSubmit(valores);
  };

  return (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-8">
    {/* Título fuera del cuadro */}
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-bold text-pink-700 dark:text-pink-400">
        Espacio Espantapájaros
      </h1>
    </div>

    {/* Cuadro del form */}
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-6">
        {titulo}
      </h1>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} noValidate>
        {campos.map(({ name, label, type, placeholder }, i) => (
          <div key={i}>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {label}
            </label>
            <input
              type={type}
              id={name}
              name={name}
              placeholder={placeholder}
              value={valores[name]}
              onChange={handleChange}
              required
              className={`bg-gray-50 border ${
                errores[name] ? "border-red-500" : "border-gray-300"
              } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {errores[name] && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errores[name]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full text-white bg-pink-600 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          {textoBoton}
        </button>
        {textoPie && (
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-2">{textoPie}</p>
        )}
      </form>
    </div>
  </section>
);
}
