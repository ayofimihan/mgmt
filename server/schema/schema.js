// const { projects, clients } = require("../sampleData");

//Mongoose models
const Project = require("../models/Project")
const Client = require("../models/Client")
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

//Client type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

//Project type
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    id: { type: GraphQLString },
    status: {type: GraphQLString},

    client:{
        type: ClientType,
        resolve: (parent,args)=> Client.findById(parent.id)
    }
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: (parent, args) =>
        Client.findById(args.id),
    },
    projects: {
        type: new GraphQLList(ProjectType),
        resolve:()=>{Project.find()}
    },
    project: {
      type: ProjectType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: (parent, args) => 
        Project.findById(args.id)
      ,
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
