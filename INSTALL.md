# Guía de Instalación

Sigue estas instrucciones para clonar y ejecutar el proyecto en tu entorno local.

## Prerrequisitos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 20.x o superior)
- [npm](https://www.npmjs.com/get-npm) (generalmente se instala con Node.js)
- [Git](https://git-scm.com/)

## Pasos

1.  **Clona el repositorio:**
    Abre tu terminal y ejecuta el siguiente comando, reemplazando `https://github.com/MAIKIREX/innova-website-frontend.git` con la URL real del repositorio.

    ```bash
    git clone https://github.com/MAIKIREX/innova-website-frontend.git
    ```

2.  **Navega al directorio del proyecto:**

    ```bash
    cd frontend
    ```

3.  **Instala las dependencias:**
    Este comando leerá el archivo `package.json` e instalará todas las librerías necesarias para el proyecto.

    ```bash
    npm install
    ```

4.  **Ejecuta el servidor de desarrollo:**
    Esto iniciará la aplicación en modo de desarrollo.

    ```bash
    npm run dev
    ```

5.  **Abre la aplicación:**
    Una vez que el servidor esté en funcionamiento, abre tu navegador y visita la siguiente dirección:

    [http://localhost:3000](http://localhost:3000)

Deberías ver la página de inicio de la aplicación.
