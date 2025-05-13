const express = require('express');
const os = require('os');
const pokeneaRoutes = require('./routes/pokeneaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', pokeneaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT} - Contenedor ID: ${os.hostname()}`);
app.set('view engine', 'ejs');
app.use(express.static('public'));

});
