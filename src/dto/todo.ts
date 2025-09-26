import { InputMaybe, InputTodoAll } from "@/types/gen/graphql";

const todoAll = (cond?: InputMaybe<InputTodoAll>) => {
	const newCond: InputTodoAll = {
		id: cond?.id,
		title: cond?.title,
		done: cond?.done,
		limit: cond?.limit || 10,
		offset: cond?.offset || 0,
	};

	return newCond;
};

export default {
	todoAll,
};
