import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const port = process.env.PORT || 3000;

const server = new ApolloServer({
	typeDefs,
	resolvers,
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
