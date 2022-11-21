const express = require('express');
const mongoose = require('mongoose');
const routerApi = require('./routes/');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const app = express();
const port = 3000;

const uri = "mongodb+srv://MalditoEnfermito:IWjvVxjKCWVfKoPa@prograweb2.9ompijn.mongodb.net/?retryWrites=true&w=majority";

async function connect(){
  try{
    await mongoose.connect(uri, {useNewUrlParser:true});
    console.log("connected to MongoDB");
  }catch(error){
    console.error(error);
  }
}

app.use(
  express.json({
    extended: false, // permite codificar matrices y objetos enriquecidos en formato codificado en url
  })
);
app.get('/', (req, res) => res.send('Ruta principal'));
console.log("aqui toy");
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
// eslint-disable-next-line no-console
connect();
app.listen(port, () => console.log('Mi puerto', port));


