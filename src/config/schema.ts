import {makeSchema} from '@nexus/schema'
import {nexusPrisma} from 'nexus-plugin-prisma'
import {join} from 'path'
import * as typesDefs from '../api'

const schema = makeSchema({
    types: [typesDefs],
    plugins: [nexusPrisma()],
    outputs: {
        typegen: join(__dirname, '../generated', 'typegen.ts'),
        schema: join(__dirname, '../generated', 'schema.graphql'),
    },
    typegenAutoConfig: {
        sources: [
            {
                source: require.resolve('./context'),
                alias: 'ContextModule',
            }
        ],
        contextType: "ContextModule.Context",
    }
})

export default schema