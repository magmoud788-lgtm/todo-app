export class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

   addTodo(todo) {
    this.todos.push(todo);
   }

   removeTodo(todo) {
    this.todos = this.todos.filter(item => item !== todo)
   }
};

