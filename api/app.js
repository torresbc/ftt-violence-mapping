const express = require('express'); 
const app = express(); 
const port = 3000;

app.get('/', (req, res) => res.send('#Partiu, Floripa 2022!'));
app.listen(port, () => console.log('Deu bom!'));