import { query } from "./resolvers/query";

export const resolvers = {
  Query: query,
  // Mutation: {
  //   addPlayer: (_, { data }: { data: PlayerAddingI }) => {
  //     console.log(player);
  //   },
  // },
};
