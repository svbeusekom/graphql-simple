import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { readFileSync } from "fs";
import UserResolver from "./Infrastructure/Resolvers/User/UserResolver";

const typeDefs = readFileSync('./src/Infrastructure/Graphql/schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer({ typeDefs, resolvers: UserResolver });

const app = express();

server.start().then(() => {
    server.applyMiddleware({ app });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}${server.graphqlPath}`);
});