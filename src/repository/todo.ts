import todoDAO from "@/dao/todo";
import { InputTodoAll } from "@/types/gen/graphql";

const findTodoAll = async (cond?: InputTodoAll) => {
	return await todoDAO.FindAll(cond);
};

export default {
	findTodoAll,
};
