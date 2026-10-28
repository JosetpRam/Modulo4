const fs = require('fs');
const path = require('path');
const output = path.resolve(__dirname, '..', 'distri');
fs.rmSync(output, { recursive: true, force: true });
console.log('Carpeta distri/ eliminada.');
