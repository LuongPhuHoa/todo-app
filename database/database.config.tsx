import Dexie from "dexie";
import { User, Todo } from "./models";
import { initialData } from "./initialData";

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

    getUserByEmail(email: string) {
        return this.userDatabase.where("email").equals(email).first();
    }

    getTodosByUserId(userId: number) {
        return this.todoDatabase.where("userId").equals(userId).toArray();
    }

    getTodoById(id: number) {
        return this.todoDatabase.where("id").equals(id).first();
    }

    getTodoByTitle(title: string) {
        return this.todoDatabase.where("title").equals(title).first();
    }

}

export const db = new TodoDatabase();

export default db;

db.open().then(() => {
    db.table('users').count((count) => {
      if (count === 0) {
        db.table('users').bulkAdd(initialData);
      }
    });
});