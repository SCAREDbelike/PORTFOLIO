# Portfolio personal · Guillermo Pereyra

Portafolio renovado con **React + Vite + Bootstrap 5** y CSS personalizado. Mantiene la identidad visual oscura del portfolio original, mejora el diseño responsive, añade LinkedIn y presenta proyectos verificados de GitHub.

## Ejecutar desde Git Bash (Windows)

1. Abre Git Bash en la carpeta raíz que contiene `package.json`.
2. Instala dependencias:

   ```bash
   npm install
   ```

3. Inicia servidor:

   ```bash
   npm run dev
   ```

4. Abre `http://localhost:5173/` o la dirección que indique la terminal.
5. Comprueba antes de publicar:

   ```bash
   npm run build
   ```

La carpeta de salida para Vercel es `dist`, y el comando de compilación es `npm run build`. Framework preset: Vite.

## Estructura

```text
src/
├── components/
│   ├── Header.jsx         # Menú responsivo y LinkedIn
│   ├── Hero.jsx           # Presentación y terminal animada
│   ├── About.jsx          # Sobre mí
│   ├── Projects.jsx       # Cuatro proyectos explicados
│   ├── Stack.jsx          # Tecnologías y herramientas
│   ├── Certificates.jsx   # UX/UI y temario de ocho cursos
│   ├── Contact.jsx        # Formulario FormSubmit
│   └── Footer.jsx         # Enlaces de redes
├── data/
│   └── portfolio.js       # Editar enlaces, proyectos y cursos
├── hooks/
│   └── usePortfolioEffects.js
├── App.jsx
├── index.css
└── main.jsx               # Importa Bootstrap y luego el CSS propio
```

### Bootstrap

Bootstrap **5.3.8** se instala mediante npm. Los componentes usan clases como `row`, `col-md-6`, `col-lg-6`, `g-3`, `btn`, `badge`, `form-control` y utilidades flexibles. `index.css` conserva el look personalizado del portfolio. El menú móvil se controla con estado de React (no depende del JS imperativo de Bootstrap).

### Certificación UX/UI

Se mantiene el enlace compartido: https://coursera.org/share/83d39358a87d63d7afdb1151eb1dd3ee

**Importante para fidelidad académica:** la página de la credencial compartida no permitió verificar automáticamente el título o proveedor exacto. El bloque *ocho cursos* está basado en el **temario actual (en inglés) del programa Google UX Design Professional Certificate de Coursera**, que tiene ocho cursos. No afirma que el titular recibió ocho certificados individuales ni que esos ocho cursos fueron completados. Si tu credencial corresponde a otro programa, reemplaza `UX_COURSES` en `src/data/portfolio.js` y ajusta la introducción en `Certificates.jsx`.

Fuente del plan de cursos: https://www.coursera.org/professional-certificates/google-ux-design

### Formulario de contacto

Usa [FormSubmit](https://formsubmit.co/) y envía a `gpereyradev@gmail.com`, sin backend ni API keys en el frontend. **La primera vez** debes publicar el sitio, hacer un envío de prueba y confirmar el correo de activación que FormSubmit te envía. Solo después verifica que lleguen mensajes reales. No hay garantía de entrega hasta completar esta activación.

### Proyectos

Las descripciones provienen de los repositorios enlazados y del proyecto React realizado para SENATI. No se agregaron logros, métricas o clientes inventados.

### Subir a GitHub

Dentro de la carpeta del proyecto:

```bash
git status
git add .
git commit -m "Mejorar portfolio con Bootstrap, UX/UI y LinkedIn"
git push origin main
```

Si esta carpeta recién extraída **no tiene** un directorio `.git`, crea un repositorio nuevo o copia sus archivos al proyecto Git que ya utilizas. Nunca hagas `git init` dentro de una copia sin tener claro a qué repositorio la vas a conectar.
