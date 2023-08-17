import { Todo, addTodo, removeTodo, toggleTodo, fetchTodos } from "./todoSlice";
import prisma from "@/prisma/client";

export const addTodoAsync = (todo: Todo) => async (dispatch: any) => {
    dispatch(addTodo(todo));

    await prisma.todo.create({
        data: {
            taskName: todo.taskName,
            completed: todo.completed,
            userID: todo.userID,
        },
    });
}

export const removeTodoAsync = (id: number) => async (dispatch: any) => {
    dispatch(removeTodo(id));

    await prisma.todo.delete({
        where: {
            id: id,
        },
    });
}

export const toggleTodoAsync = (id: number) => async (dispatch: any) => {
    dispatch(toggleTodo(id));

    const todo = await prisma.todo.findUnique({
        where: {
            id: id,
        },
    });

    if (todo) {
        await prisma.todo.update({
            where: {
                id: id,
            },
            data: {
                completed: !todo.completed,
            },
        });
    }
}

export const fetchTodosAsync = (userID: number) => async (dispatch: any) => {
    const todos = await prisma.todo.findMany({
        where: {
            userID: userID,
        },
    });

    dispatch(fetchTodos(todos));
}