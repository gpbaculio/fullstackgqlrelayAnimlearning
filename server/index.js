const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { graphqlUploadExpress } = require("graphql-upload");
const cors = require("cors");

const schema = require("./schema");

const port = 5000;

const app = express();

app.use(
  "/graphql",
  cors(),
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Listening on port ${port}`));
