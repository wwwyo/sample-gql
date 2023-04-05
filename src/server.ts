import { ApolloServer, gql } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { users } from "./mock/user";
import { rooms } from "./mock/room";
import { messages } from "./mock/messages";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      users,
      rooms,
      messages,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

export default server;
