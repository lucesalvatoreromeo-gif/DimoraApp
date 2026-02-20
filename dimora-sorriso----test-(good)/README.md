
# Dimora Sorriso - Guida Digitale

## Caricamento Manuale su Netlify (Drag & Drop)

Se non vuoi usare GitHub, segui questi passaggi:

1. Apri il terminale nella cartella del progetto.
2. Installa i componenti:
   ```bash
   npm install
   ```
3. Crea il pacchetto per il sito (la cartella `dist`):
   ```bash
   npm run build
   ```
4. Al termine, vedrai una nuova cartella chiamata **`dist`** nel tuo progetto.
5. Vai su [Netlify Drop](https://app.netlify.com/drop).
6. Trascina la cartella **`dist`** (solo quella!) nel riquadro di caricamento.
