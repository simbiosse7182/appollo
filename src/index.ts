require('dotenv').config()

import {ApolloServer} from "apollo-server";
import {schema, context} from "./config";

const server = new ApolloServer({schema, context})

server.listen({port: 4000}).then(() => console.log('listen on 4000'))
