import todoRepository from "@/repository/todo";
import { InputTodoAll } from "@/types/gen/graphql";

const findTodoAll = async (cond?: InputTodoAll) => {
	return await todoRepository.findTodoAll(cond);
};

export default {
	findTodoAll,
};
