# 🧑‍💻 Convenciones de Código y Commits

Este documento define los estilos de nomenclatura que usamos en el proyecto y el proceso para hacer commits siguiendo el estándar [Conventional Commits](https://www.conventionalcommits.org/).

---

## 📂 Convenciones de Nombres

### 📁 Archivos y Carpetas 
## Usar como referencia [Vercel Next.js Starter Example](https://github.com/vercel/next-learn/tree/main/dashboard/starter-example) 
- **Formato:** `kebab-case` - ✅ 
  `user-profile.js`, `main-layout/`, `auth-form/`

---

### 🐫 Variables y Funciones
- **Formato:** `camelCase` - ✅
- **Lenguaje:** `español`
- **Ejemplo:**  
  `obtenerDatosUsuario`, `ejecutarLogin`, `autenticarToken`

---

### 🧱 Clases y Componentes React
- **Formato:** `PascalCase` - ✅
- **Lenguaje:** `español`
- **Ejemplo:**  
  `Perfilusuario`, `FormularioLogin`, `LayoutPrincipal`

---

### 📢 Constantes Globales
- **Formato:** `UPPER_SNAKE_CASE`
- **Lenguaje:** `español`
- **Ejemplo:**  
  `API_BASE_URL`, `TIEMO_ESPERA_DEFAULT`

---

## Nomenclatura Gihub Branchs

1. **Posicionado en la rama dev cree una nueva rama.**
2 **El nombre de la rama debe de seguir la siguiente convencion:**
 <tipo>/<jira-ticket-id>/<descripcion-corta>

Ejemplo estructura rama:
feat/pi-22/initial-commit


---

## ✅ Commits con Conventional Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial claro y semántico. Esto mejora la legibilidad, automatiza el changelog y facilita los despliegues.

Utilizá la extensión de VS Code:

[🔗 Conventional Commits by vivaxy](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)

### 🧱 Estructura

1. **En lugar de escribir un commit manualmente, hacé clic en "Conventional Commits".**
2. **Seleccioná el tipo de cambio** (`feat`, `fix`, `chore`, etc.)
3. **Ingresá el scope opcional** (ej. `none`)
4. **Selecione un emoji correspondiente al trabajo realizado en el commit** 
5. **Escribí el mensaje corto del commit** (ej. `PI-22 | Initial commit`)
6. **Presione la tecla enter el paso 5/6 no es obligatorio** 
7. **Escriba la URL del ticket de jira asociado**
8. **Confirmá el commit generado**

Ejemplo estructura commit :

feat: :sparkles: PI-22 | Initial commit

https://proyectoespanta.atlassian.net/browse/PI-22
