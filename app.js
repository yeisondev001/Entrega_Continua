const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal - Hola Mundo
app.get('/', (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Hola Mundo DevOps</title>
    <style>
      body { 
        font-family: Arial, sans-serif; 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        margin: 0; padding: 0; 
        display: flex;
        justify-content: center; 
        align-items: center;
        height: 100vh; 
        color: white;
      }
      .container { 
        text-align: center; 
        background: rgba(0,0,0,0.3); 
        padding: 2rem; 
        border-radius: 15px;
      }
      h1 { font-size: 2.5rem; margin-bottom: 1rem; }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>🚀 Hola Mundo DevOps! yeison rojas 20241822</h1>
      <p>App con Node.js + Express + Docker</p>
      <p><strong>Servidor:</strong> ${process.env.HOSTNAME || 'Local'}</p>
      <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
    </div>
  </body>
  </html>
  `;
  res.send(html);
});

// Health check simple
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'App funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});