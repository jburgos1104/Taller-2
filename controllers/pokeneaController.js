const os = require('os');
const pokeneas = require('../data/pokeneas');

function getRandomPokenea() {
  return pokeneas[Math.floor(Math.random() * pokeneas.length)];
}

const getPokeneaJson = (req, res) => {
  const p = getRandomPokenea();
  res.json({
    id: p.id,
    nombre: p.nombre,
    altura: p.altura,
    habilidad: p.habilidad,
    contenedor_id: os.hostname()
  });
};

const getPokeneaFilosofia = (req, res) => {
  const p = getRandomPokenea();
  res.send(`
    <html>
      <body style="text-align: center; font-family: Arial;">
        <h1>${p.nombre}</h1>
        <img src="${p.imagen}" alt="${p.nombre}" style="width:300px;"><br>
        <p style="margin-top: 20px; font-style: italic;">"${p.frase}"</p>
        <p>ID del contenedor: ${os.hostname()}</p>
      </body>
    </html>
  `);
};

const getPokeneaFilosofiaById = (req, res) => {
  const p = pokeneas.find(pok => pok.id === parseInt(req.params.id));
  if (!p) return res.status(404).send("Pokenea no encontrada");
  res.render('filosofia', {
    pokenea: p,
    contenedor: os.hostname()
  });
};
const getPokeneaById = (req, res) => {
  const p = pokeneas.find(pok => pok.id === parseInt(req.params.id));
  if (!p) return res.status(404).send("Pokenea no encontrada");
  res.render('pokenea', {
    pokenea: p,
    contenedor: os.hostname()
  });
};


module.exports = {
  getPokeneaJson,
  getPokeneaFilosofia,
  getPokeneaById,              // <== Esta línea debe estar
  getPokeneaFilosofiaById
};
