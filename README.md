# Proyecto Bootstrap + jQuery + JavaScript + Sass

## Requisitos
- Node.js y npm instalados.
- Conexión a Internet para cargar Bootstrap y jQuery desde CDN al abrir la página.

## Cómo ejecutar en Visual Studio Code
1. Descomprime el ZIP y abre la carpeta `Proyecto_Bootstrap_Sass_NPM` en VS Code.
2. Abre Terminal → Nueva terminal.
3. Instala las dependencias ejecutando:

   ```bash
   npm install
   ```

4. Compila Sass a CSS:

   ```bash
   npm run scss
   ```

5. Genera la versión de producción:

   ```bash
   npm run build
   ```

6. Abre `index.html` con Live Server, o abre el archivo directamente en el navegador.

> Nota: `node-sass` puede requerir una versión de Node.js compatible en algunos equipos. Si npm muestra un error de compilación nativa, utiliza una versión LTS de Node.js compatible con node-sass o sustituye el compilador por `sass` y actualiza el script.

## Estructura
- `index.html`: página web y modal de Bootstrap.
- `js/main.js`: registra los cuatro eventos del modal en la consola; cambia el botón a rojo y lo deshabilita al abrir, y lo restaura al cerrar.
- `scss/styles.scss`: variables `$amarillo`, `$rojo`, `$verde` y mixin `panel-estilo`.
- `css/styles.css`: CSS de salida enlazado desde el HTML.
- `scripts/build.js`: copia los archivos necesarios para producción.
- `distri/`: se crea con `npm run build` y contiene los archivos listos para publicar.

## Verificar los eventos del modal
Abre la página, pulsa F12 y selecciona la pestaña Console. Pulsa **Abrir modal** y luego **Cerrar**. Deben aparecer:
- `show.bs.modal`
- `shown.bs.modal`
- `hide.bs.modal`
- `hidden.bs.modal`

## Publicar
Sube el contenido de `distri/` a la carpeta pública de tu hosting (por ejemplo, `public_html`). No es necesario subir `node_modules/`.
