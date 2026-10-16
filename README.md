# Bio Linktree — Dra. Yoandrina Ávila | Odonto Ávila

Este proyecto es la página de enlaces oficial (Linktree / Bio link) optimizada para dispositivos móviles, Instagram, TikTok y WhatsApp de la **Dra. Yoandrina Ávila** (Odonto Ávila, Caracas).

## 🚀 Características
- **Identidad visual oficial**: Paleta institucional magenta/burgundy, logo oficial y fotografía en alta resolución de la Dra. Yoandrina Ávila.
- **Botón principal CTA**: *Reservar cita (Evaluación $20)* hacia [odontoavila.com.ve/consultas](https://odontoavila.com.ve/consultas).
- **Acceso rápido**: Botón directo a WhatsApp y botón *Cómo llegar* a la sede en Av. Lecuna, Torre Profesional del Centro.
- **Acordeones interactivos**:
  1. Consulta de evaluación ($20, explicación del diagnóstico y botón para reservar).
  2. Especialidades (Ortodoncia financiada, Odontopediatría, Endodoncia, Cordales, Implantes y Limpieza).
  3. Horarios de atención (Lunes a viernes 8:00 am - 4:00 pm y Sábados previa cita).
  4. Ubicación con mapa interactivo de Google Maps y botón de navegación.
  5. Canales de contacto directo (WhatsApp, llamada, correo y sitio web).
  6. Reseñas reales verificadas de pacientes en Google Maps.
- **Rendimiento ultra rápido**: Vanilla HTML/CSS/JS con 0 dependencias pesadas, carga instantánea (<0.2s).

## 📦 Cómo subir a GitHub y desplegar en Vercel con tu propio slug

### 1. Subir a GitHub
```bash
# 1. Crea un nuevo repositorio en GitHub (ej: bio-odontoavila)
# 2. Desde la terminal en esta carpeta (bio_odontoavila), ejecuta:
git remote add origin https://github.com/TU_USUARIO/bio-odontoavila.git
git push -u origin main
```

### 2. Desplegar en Vercel con slug personalizado
1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **Add New... > Project**.
3. Importa el repositorio `bio-odontoavila`.
4. En el campo **Project Name**, escribe el slug que quieras para la URL:
   - Ejemplo: `odontoavila-bio` -> la URL será `https://odontoavila-bio.vercel.app`
   - O: `dra-yoandrina-bio` -> la URL será `https://dra-yoandrina-bio.vercel.app`
5. Haz clic en **Deploy**.
6. *(Opcional)* Si deseas conectarlo con el dominio propio de la clínica, ve a **Settings > Domains** y añade un subdominio como:
   `bio.odontoavila.com.ve` o `links.odontoavila.com.ve`.
