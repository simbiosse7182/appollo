import {asNexusMethod} from "@nexus/schema";
import {GraphQLDateTime} from 'graphql-iso-date'

export const GQLDate = asNexusMethod(GraphQLDateTime, 'date')