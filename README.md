MecanoCheck — Landing page (Next.js + Tailwind)

Descripción

Proyecto: Landing page para servicios de peritaje y revisión vehicular a domicilio en Bogotá.
Tecnologías: Next.js (App Router), React, Tailwind CSS.

Contenido de este README

- Cómo configurar el número de WhatsApp y generar el enlace
- Cómo ejecutar y desplegar (Vercel, Cloudflare Pages, Cloudflare Workers/OpenNext, Docker)
- Notas de seguridad y troubleshooting

1) Enlace de WhatsApp y teléfono (guía rápida)

WhatsApp Web/Movil (usando wa.me):
- Formato general: https://wa.me/<COUNTRYCODE+NUMBER>?text=<URL_ENCODED_MESSAGE>
- Ejemplo con tu número (ejemplo en el proyecto):
  https://wa.me/573172933591?text=Hola%20MecanoCheck%2C%20quiero%20agendar%20una%20cita%20para%20mi%20veh%C3%ADculo%20en%20Bogot%C3%A1

Teléfono (llamada directa):
- Formato: tel:+<COUNTRYCODE+NUMBER>
- Ejemplo: tel:+573172933591

Cómo construir el mensaje:
- Usa URL encoding para espacios y caracteres especiales. Puedes crear el enlace manualmente o con JavaScript:

  const number = '573172933591';
  const message = encodeURIComponent('Hola MecanoCheck, quiero agendar una cita para mi vehículo en Bogotá');
  const waLink = `https://wa.me/${number}?text=${message}`;

Dónde cambiar el número en el proyecto

- Archivo principal: app/page.tsx
- Busca la constante que define el número (por ejemplo: whatsappNumber o phoneNumber) y reemplázala por tu número en formato internacional (sin +, por ejemplo 5731... para Colombia).

Ejemplo (en app/page.tsx):

  const whatsappNumber = '573172933591';
  const whatsappText = encodeURIComponent('Hola, quisiera agendar un peritaje a domicilio en Bogotá.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

2) Ejecutar localmente

Instalar dependencias y correr en desarrollo:

  npm install
  npm run dev

Build de producción y previsualizar:

  npm run build
  npm start   # si tu package.json define start para servir la build, o usa next start

3) Opciones de despliegue

A) Vercel — (Recomendado para rapidez)
- Conecta tu repositorio en Vercel.
- Vercel detecta Next.js automáticamente. Usa el comando de build: npm run build.
- Si tu next.config.ts está configurado con output: 'export' y quieres export estático, Vercel también soporta eso.

B) Cloudflare Pages — export estático (sin Workers)
- Si prefieres evitar Workers/OpenNext, usa export estático:
  - Asegúrate en next.config.ts tener: output: 'export', trailingSlash: true (si lo deseas)
  - En CI (Cloudflare Pages) configura:
    - Build command: npm run build && npm run export
    - Output directory: out
- Esto sube solo archivos estáticos y evita configuraciones de Workers/bindings.

C) Cloudflare Workers / OpenNext (avanzado — ya hay archivos en el repo)
- El proyecto contiene open-next.config.ts y wrangler.jsonc generados por la migración OpenNext.
- Para deploy con OpenNext (Workers) necesitas variables y permisos:
  - No guardes secrets en el repo. Usa .dev.vars localmente para preview (no debe subirse).
  - Variables necesarias (en CI o Cloudflare): CF_ACCOUNT_ID, CF_API_TOKEN
- Comandos básicos:
  - npx opennextjs-cloudflare build
  - npx opennextjs-cloudflare deploy
- Notas: Si el deploy falla por "service binding references Worker 'X' which was not found", revisa wrangler.jsonc y alinea el campo "name" con el worker en tu cuenta o crea el worker con ese nombre en Cloudflare. Se corrigió en el repo para usar name: "mecanocheck".

D) Docker (autohospedaje)
- Construir la imagen:
  docker build -t mecanocheck:latest .
- Ejecutar:
  docker run -p 3000:3000 mecanocheck:latest

4) Notas de seguridad

- No subir tokens ni credenciales (CF_API_TOKEN, claves privadas) al repo. Usa variables de entorno/Secret management del proveedor de CI.
- .dev.vars en el repo es una plantilla; si colocas valores reales, asegúrate de no commitearlos. Usa .gitignore apropiadamente.

5) Troubleshooting rápido (errores que aparecieron en CI y cómo se resolvieron)

- TS2307: Cannot find module '@opennextjs/core'
  - Solución en el repo: añadí @opennextjs/core como devDependency para que los tipos estén disponibles en el entorno CI.

- Error de deploy Cloudflare: Service binding 'WORKER_SELF_REFERENCE' references Worker 'web-peritajes' which was not found (code: 10143)
  - Causa: wrangler.jsonc referenciaba un worker con nombre distinto al existente en la cuenta.
  - Solución: alinear el nombre del worker en wrangler.jsonc (ahora "mecanocheck") o crear el worker con el nombre que espera la binding.

6) Siguientes pasos recomendados

- Verifica en GitHub que no haya secretos en commits recientes (si hay, revocar y rotar tokens).
- Decidir destino final de despliegue:
  - Para una landing estática sencilla → Cloudflare Pages o Vercel (export estático). Evita Workers si no necesitas funciones de Edge.
  - Si quieres usar OpenNext (Workers) por assets o middleware → configura CF_ACCOUNT_ID/CF_API_TOKEN en Secrets.

Contacto / Soporte

Si quieres, puedo:
- Añadir un workflow de GitHub Actions para deploy automático a Cloudflare Pages/Workers.
- Ejecutar npm audit fix y revisar cambios antes de commitear.
- Crear un archivo .env.example con las variables que debes configurar en CI.

¡Listo! El README se ha añadido al repositorio con instrucciones. Si quieres que incluya capturas de pantalla, ejemplos de enlaces o un paso a paso para Vercel, indícalo y lo agrego.
