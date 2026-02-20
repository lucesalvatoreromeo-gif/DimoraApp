
import AdmZip from 'adm-zip';
import path from 'path';
import fs from 'fs';

const zip = new AdmZip();
const rootPath = process.cwd();

// Lista dei file essenziali per far funzionare il progetto su GitHub/Netlify
const filesToInclude = [
    'App.tsx',
    'constants.ts',
    'types.ts',
    'index.tsx',
    'index.html',
    'package.json',
    'tsconfig.json',
    'tsconfig.node.json',
    'vite.config.ts',
    'netlify.toml',
    '.node-version',
    'README.md',
    'metadata.json',
    '.gitignore'
];

console.log('Inizio creazione ZIP...');

filesToInclude.forEach(file => {
    const fullPath = path.join(rootPath, file);
    if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath);
        zip.addFile(file, content);
        console.log(`Aggiunto: ${file}`);
    }
});

// Aggiungiamo anche la cartella services se esiste
const servicesPath = path.join(rootPath, 'services');
if (fs.existsSync(servicesPath) && fs.lstatSync(servicesPath).isDirectory()) {
    zip.addLocalFolder(servicesPath, 'services');
    console.log('Aggiunta cartella: services');
}

try {
    const buffer = zip.toBuffer();
    fs.writeFileSync('PROGETTO_DA_CARICARE.zip', buffer);
    console.log('File PROGETTO_DA_CARICARE.zip creato con successo!');
} catch (err) {
    console.error('Errore durante la scrittura dello ZIP:', err);
}
