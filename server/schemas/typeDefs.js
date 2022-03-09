const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Book {
    _id: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
    bookId: String!
  }

  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me(userId: ID): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;