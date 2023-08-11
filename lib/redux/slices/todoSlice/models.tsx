export class Todo {
    static lastId = 0;
    id: number;
    title: string;
    completed: boolean;

    constructor(title: string) {
        this.id = ++Todo.lastId;
        this.title = title;
        this.completed = false;
    }
}

export interface TodoState {
    todos: Todo[];
}