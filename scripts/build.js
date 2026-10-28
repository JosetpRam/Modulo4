const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'distri');

function copyFile(source, destination) {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

['index.html', 'css/styles.css'].forEach(file => {
  copyFile(path.join(root, file), path.join(output, file));
});
copyFile(path.join(root, 'js/main.js'), path.join(output, 'js/main.js'));

console.log('Build terminado: archivos listos en la carpeta distri/');
console.log('Puedes publicar el contenido de distri/ en tu servidor web.');
