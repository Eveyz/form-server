import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Friend {
    id: ID
    firstname: String
    lastname: String
    gender: Gender
    age: Int
    language: String
    email: String
    contacts: [Contact]
  }

  type Alien {
    id: ID
    firstname: String
    lastname: String
    planet: String
  }

  type Contact {
    firstname: String
    lastname: String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type Query {
    getOneFriend(id: ID!): Friend
    getAliens: [Alien]
  }

  input FriendInput {
    id: ID
    firstname: String!
    lastname: String
    gender: Gender
    age: Int
    language: String
    email: String
    contacts: [ContactInput]
  }

  input ContactInput {
    firstname: String
    lastname: String
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
    deleteFriend(id: ID!): String
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };