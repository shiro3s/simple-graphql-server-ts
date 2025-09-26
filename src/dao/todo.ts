import prisma from "@/libs/prisma";
import { InputTodoAll } from "@/types/gen/graphql";

const FindAll = async (cond?: InputTodoAll) => {
	const todos = await prisma.todo.findMany({
		where: {
			id: {
				equals: cond?.id || undefined,
			},
			title: {
				contains: cond?.title || undefined,
			},
			done: {
				equals: cond?.done || undefined,
			},
		},
		skip: cond?.offset || undefined,
		take: cond?.limit || undefined,
	});
	const count = await prisma.todo.count();

	return {
		todos,
		count,
	};
};

export default {
	FindAll,
};
