const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { graphqlUploadExpress } = require("graphql-upload");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

const schema = require("./schema");

const port = 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  multer({
    storage: multer.memoryStorage(),
  }).any()
);
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP((req) => {
    return {
      schema,
      graphiql: true,
      context: {
        req,
      },
    };
  })
);

app.listen(port, () => console.log(`Listening on port ${port}`));
