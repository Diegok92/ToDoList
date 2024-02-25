const express = require("express");
const app = express();
const path = require("path");

// Configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Configurar la ruta para servir el archivo HTML principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
