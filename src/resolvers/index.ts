import todoDTO from "@/dto/todo";
import todoService from "@/service/todo";
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
		FindTodoAll: async (_, { cond }) => {
			const newCond = todoDTO.todoAll(cond);
			return await todoService.findTodoAll(newCond);
		},
	},
};
