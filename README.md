# 📘 Electiva 2 – Práctica Entrega Continua  
## 🚀 Documentación de la Práctica

---

## 🧩 1. Descripción General
En esta práctica se desarrolló y desplegó una aplicación simple utilizando herramientas modernas de integración continua, contenedores y repositorios de código.  
El objetivo principal fue comprender el flujo de trabajo DevOps desde la creación de una aplicación hasta la publicación de su imagen en Docker Hub.

---

## 🛠 2. Tecnologías Utilizadas
- **Node.js** (Aplicación base)
- **Docker** (Contenedorización)
- **Docker Hub** (Registro de imágenes)
- **Git & GitHub** (Control de versiones)
- **Terminal / CLI**
- **Markdown para documentación**

---

## 📂 3. Estructura del Proyecto
/app-hola-mundo-js
├── dockerfile
├── README.md
├── package.json
├── package-lock.json
---

## 🐳 4. Creación de la Imagen Docker

### 🔹 4.1 Construcción de la imagen
Dentro del directorio del proyecto:

```bash
docker build -t sryeisonrojas/hola-mundo -f dockerfile .
