import Dexie from "dexie";
import { User, Todo } from "./models";

export class TodoDatabase extends Dexie {
    userDatabase: Dexie.Table<User, number>;
    todoDatabase: Dexie.Table<Todo, number>;

    constructor() {
        super("TodoDatabase");
        this.version(1).stores({
            users: "++id,name,email,password",
            todos: "++id,userId,title,completed",
        });
        this.userDatabase = this.table("users");
        this.todoDatabase = this.table("todos");
        
    }

    getUser = async () => {
        const user = await this.userDatabase.toArray();
        return user[0];
    }

    setUser = async (user: User) => {
        await this.userDatabase.clear();
        await this.userDatabase.add(user);
    }
}

export const db = new TodoDatabase();

export default db;