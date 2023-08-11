export class User {
    id?: number;
    name?: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string) {
        this.id = 0;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export class Todo {
    static lastId = 0;
    id: number;
    userId: number;
    title: string;
    completed: boolean;

    constructor(userId: number, title: string) {
        this.id = ++Todo.lastId;
        this.userId = userId;
        this.title = title;
        this.completed = false;
    }
}

export interface TodoState {
    todos: Todo[];
}