import { join } from "node:path";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const port = process.env.PORT || 3000;

const schema = loadSchemaSync(join(__dirname, "../schema/schema.graphql"), {
	loaders: [new GraphQLFileLoader()],
});
const schemaWithResolvers = addResolversToSchema({ schema, resolvers });
const server = new ApolloServer({
	schema: schemaWithResolvers,
});

startStandaloneServer(server, {
	listen: { port },
})
	.then(({ url }) => {
		console.log(`Server ready at: ${url}`);
	})
	.catch((err) => {
		console.log(err);
	});
