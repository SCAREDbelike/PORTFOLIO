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


## Certificados Cisco Networking Academy

Se han incorporado **seis constancias originales** de Cisco Networking Academy a través de SENATI, disponibles desde `public/certificados/` en PDF y miniatura WebP. La sección se genera desde `src/data/portfolio.js` mediante `NETACAD_CERTIFICATES` y `src/components/Certificates.jsx`.

- Fundamentos de Python 1 (01/03/2025)
- Introducción a la Ciencia de Datos (10/10/2024)
- Conceptos Básicos de Hardware de Computadora (19/09/2024)
- Conceptos básicos de redes (22/08/2024)
- Introducción a Ciberseguridad (15/08/2024)
- Introducción al Internet de las Cosas y Transformación Digital (05/08/2024)

**Para aplicar al repositorio GitHub ya existente:** conservar la carpeta `.git` de `PORTFOLIO` y copiar el contenido de este proyecto encima, especialmente `src/` y `public/certificados/`. Ejecutar `npm install`, `npm run build`, `git add .`, `git commit -m "Agrego seis certificados Cisco NetAcad"` y `git push origin main`. No subir `node_modules/` ni `dist/`.

Nota: los certificados contienen el nombre completo del titular, ya visible en los documentos originales. Publicarlos en un repositorio público hace esa información accesible por Internet.
