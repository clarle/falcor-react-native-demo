const express       = require('express');
const Router        = require('falcor-router');
const falcorExpress = require('falcor-express');

const app  = express();
const port = process.env.PORT || 3000;

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
  // create a Virtual JSON resource with single key ("greeting")
  return new Router([{
    // match a request for the key "greeting"
    route: "greeting",
    // respond with a PathValue with the value of "Welcome to Falcor!"
    get: () => {
      return {
        path: ["greeting"],
        value: "Welcome to Falcor!"
      };
    }
  }]);
}));

console.log(`Falcor server now listening on port ${port}`);
app.listen(port);
