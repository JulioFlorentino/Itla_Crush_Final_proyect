# ITLA Crush – Proyecto Final

## 🌐 Página desplegada

Aquí podrás acceder a la versión en línea del proyecto:  
🔗 **[Demo del proyecto](https://julioflorentino.github.io/Itla_Crush_Final_proyect/#/)**

Una aplicación web para compartir confesiones públicas o privadas entre usuarios de ITLA. Está desarrollada con **React (Vite)**, **Firebase (Auth + Firestore)** y estilos personalizados.

---

[![GitHub repo](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/JulioFlorentino/Itla_Crush_Final_proyect)  
[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://react.dev/)  
[![Firebase](https://img.shields.io/badge/Backend-Firebase-orange?logo=firebase)](https://firebase.google.com/)  
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## Índice

1. [Funcionalidades Principales](#funcionalidades-principales)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Instalación y Ejecución Local](#instalación-y-ejecución-local)
5. [Cómo Funciona](#cómo-funciona)
6. [Estilos y Diseño](#estilos-y-diseño)
7. [Mejoras Futuras](#mejoras-futuras)
8. [Autor](#autor)

---

## Funcionalidades Principales

- **Registro y Login** con correo/contraseña y usuario personalizado.
- Opcional: Autenticación con cuenta de Google.
- **Confesiones**, ya sea públicas (visibles para todos) o privadas (solo, según reglas, usuarios autenticados).
- Los usuarios pueden elegir un destinatario desde los registrados o escribir uno manualmente si eligen “OTRO”.
- **Dashboard** con sidebar:
  - **Mensajes Enviados**
  - **Mensajes Recibidos**
- Diseño responsivo con cards estilizadas, bordes degradados, y un layout limpio.

---

## Tecnologías Utilizadas

- **React** (Vite) – Interfaces interactivas rápidas.
- **Firebase** –
  - **Auth**: Email/Password y Google Auth.
  - **Firestore**: Almacenamiento de usuarios y confesiones.
- **CSS personalizado** versátil y moderno (sin frameworks CSS).
- **react-icons** para íconos profesionales (usuario, logout, etc.).

---

## Estructura del Proyecto

```
src/
├── firebase.js            # Inicialización de Firebase (auth + firestore)
├── App.jsx                # Rutas principales + layout general
├── components/
│   └── ConfessionForm.jsx # Formulario para enviar confesiones
├── routes/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── Home.jsx           # Página de inicio / bienvenida
│   └── Dashboard.jsx      # Dashboard con sidebar y mensajes
└── styles/
    ├── App.css
    ├── ConfessionList.css
    ├── Navbar.css
    └── Dashboard.css
```

---

## Instalación y Ejecución Local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JulioFlorentino/Itla_Crush_Final_proyect.git
   cd Itla_Crush_Final_proyect
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Configura Firebase:

   - Crea un proyecto en Firebase Console.
   - Habilita Email/Password y Google Auth.
   - Crea una base de datos en Firestore.
   - Copia tus credenciales en un archivo `.env` o directamente en `src/firebase.js`, siguiendo este formato:
     ```js
     const firebaseConfig = {
       apiKey: "TU_API_KEY",
       authDomain: "TU_AUTH_DOMAIN",
       projectId: "TU_PROJECT_ID",
       storageBucket: "TU_STORAGE_BUCKET",
       messagingSenderId: "TU_SENDER_ID",
       appId: "TU_APP_ID",
     };
     ```

4. Inicia la app en modo desarrollo:
   ```bash
   npm run dev
   ```

---

## Cómo Funciona

- En la **home**, el usuario ve una bienvenida con un diseño atractivo.
- Puede `Registrarse` (ingresando usuario, email, contraseña) o `Iniciar Sesión` (incluso con Google).
- Un formulario para enviar una nueva confesión (pública o privada, con destinatario seleccionado o manual).
- Todas las confesiones se almacenan en Firestore y se actualizan en tiempo real en el Dashboard.

---

## Estilos y Diseño

- **Formularios** estilizados con bordes redondeados, sombras suaves y degradado en botones.
- Layout limpio, centrado y responsivo.
- Formulario de confesiones, login y registro compartiendo un estilo coherente.
- Sidebar colorido y moderno, tarjetas con borde elegante y hover animado.

---

## Mejoras Futuras

- Implementar filtros y búsqueda en los mensajes.
- Agregar perfil de usuario con avatar.
- Permitir edición de confesiones.
- Agregar notificaciones al usuario cuando reciba una confesión.

---

## Autor

Desarrollado con ❤️ por **Julio Florentino**  
[GitHub](https://github.com/JulioFlorentino) | [ITLA Crush](https://github.com/JulioFlorentino/Itla_Crush_Final_proyect)
