import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import { database } from "./config";
import { schema } from "./schema";

const app = express();

database();

app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export { app };
