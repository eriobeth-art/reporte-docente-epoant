# Reporte Docente EPOANT — acceso edupsic.com

Paquete público para GitHub Pages.

## Dominio
`https://reportedocente.edupsic.com`

## Aplicación real
La lógica y los datos siguen funcionando en Google Apps Script:
`https://script.google.com/macros/s/AKfycbxPCoy05SdDLf9B7B9CsZx9ICDV6pqX9w4wEX19NZ7I1fuw2eAo74MiRZ3yCwjY357E/exec`

## Archivos incluidos
- `index.html` — entrada pública.
- `404.html` — redirige rutas desconocidas al inicio.
- `CNAME` — configura `reportedocente.edupsic.com`.
- `.nojekyll` — evita procesamiento de Jekyll.
- `.gitignore` — evita subir accidentalmente archivos `.gs`.
- `manifest.webmanifest` — permite instalar el acceso como app/PWA.
- `sw.js` — cachea únicamente los archivos públicos del portal.
- `robots.txt`
- `assets/config.js` — URL de Apps Script. Si cambia el despliegue, edita solo este archivo.
- `assets/styles.css`
- `assets/app.js`
- `assets/logo-epoant.png`
- `icons/favicon-32.png`
- `icons/apple-touch-icon.png`
- `icons/icon-192.png`
- `icons/icon-512.png`

## Qué NO se debe subir aquí
No subas `Code.gs`, `appsscript.json` ni el `index.html` interno de Apps Script.
El backend sigue en Apps Script.

## GitHub Pages
1. Sube TODO el contenido de este ZIP a la raíz del repositorio.
2. GitHub → Settings → Pages.
3. Source: Deploy from a branch.
4. Branch: `main`.
5. Folder: `/(root)`.
6. Guarda.
7. En Custom domain debe aparecer `reportedocente.edupsic.com` gracias al archivo `CNAME`.

## DNS de edupsic.com
Crea:
- Tipo: CNAME
- Host/Nombre: `reportedocente`
- Destino: `<tu-usuario-github>.github.io`

No escribas `https://` en el destino DNS.

## HTTPS
Cuando GitHub valide el dominio, activa `Enforce HTTPS`.

## Nota
Google Apps Script está configurado para permitir la carga dentro del iframe.
El repositorio GitHub funciona únicamente como la puerta de entrada institucional;
los reportes, usuarios, alumnos y contraseñas no se almacenan en GitHub.
