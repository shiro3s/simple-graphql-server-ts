import { Resolvers } from "@/types/gen/graphql";

export const resolvers: Resolvers = {
	Query: {
		FindTodo: () => {
			return {
				id: 1,
				title: "test",
				done: false,
			};
		},
		FindTodoAll: () => {
			return [];
		},
	},
};
