import {makeSchema, fieldAuthorizePlugin} from '@nexus/schema'
import {join} from 'path'
import * as typesDefs from '../api'

const schema = makeSchema({
    types: [typesDefs],
    plugins: [fieldAuthorizePlugin()],
    outputs: {
        typegen: join(__dirname, '../api/generated', 'typegen.ts'),
        schema: join(__dirname, '../api/generated', 'schema.graphql'),
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