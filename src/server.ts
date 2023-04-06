import { ApolloServer, gql } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { teams } from "./mock/teams";
import { players } from "./mock/players";
import { messages } from "./mock/messages";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      teams,
      players,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

export default server;
