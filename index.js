import { readFileSync } from 'fs';
import { join as pathJoin } from 'path';
import express from 'express';
import routerApi from './routers/api.js'; 
import routerWeb from './routers/web.js'; 

function runWeb(port) {
  const app = express();
  app.set('views', './views')
  app.set('view engine', 'ejs')
  app.use('/', routerWeb);
  app.listen(port, () => {
    console.log(`A web server run on ${port}`);
  });
}

function runApi(port) {
  const app = express();
  app.use('/', routerApi);
  app.listen(port, () => {
    console.log(`An API server run on ${port}`);
  });
}

const { services } = JSON.parse(readFileSync(pathJoin(process.cwd(), 'config.json')));
services.forEach(service => {
  if (service.responseType === 'text/html') { // web
    runWeb(service.port);
  } else { // api
    runApi(service.port);
  }
});