export class User {
    id?: number;
    name?: string;
    email: string;
    password: string;
    isLogin?: boolean;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

export class Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;

    constructor(userId: number, title: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.userId = userId;
        this.title = title;
        this.completed = false;
    }
}

export interface TodoState {
    todos: Todo[];
}

