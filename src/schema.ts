import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    teams: [Team]
    team: Team
  }

  type Team {
    id: ID!
    name: String!
    englishName: String
    foundingDate: String
    homeStadium: String
    players: [Player]
  }

  type Player {
    id: ID!
    name: String!
    no: String
    position: String
    team: Team
  }

  input PlayerAddingInput {
    name: String!
    no: String
    position: String
    teamId: ID!
  }
`;
