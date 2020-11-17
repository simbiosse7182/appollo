import { makeSchema } from '@nexus/schema'
import { join } from 'path'
import * as typesDefs from '../api'

 const schema = makeSchema({
     types: [typesDefs],
     outputs: {
         typegen: join(__dirname, '../generated', 'typegen.ts'),
         schema: join(__dirname, '../generated', 'schema.graphql'),
    },
     typegenAutoConfig : {
        sources : [
            {
                source : require.resolve('./context'),
                alias: 'ContextModule',
            }
        ],
         contextType: "ContextModule.Context",
     }
})

export default schema