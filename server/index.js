const express = require("express");
require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
//Connect to database
connectDB();

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));
app.listen(port)
console.log(`server running on port ${port}`);
