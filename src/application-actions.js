//createProject()
//selectProject()
//deleteProject()
//renameProject()

//createTodo()
//selectTodo()
//deleteTodo()
//editTodo()
//markComplete()
//editPriority()

import { nextWednesday } from 'date-fns';
import { Todo, Project } from './object-project-todo.js';

const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];

export let projects = savedProjects.map(project => {
    const newProject = new Project(project.name);

    project.todos.forEach(todo => {
        newProject.addTodo(
            new Todo(
                todo.title,
                todo.description,
                todo.dueDate,
                todo.priority
            )
        );
    });

    return newProject;
});
export let currentProject = null;
export let currentTodo = null;

 export function createProject(name) {
    const projectcreation = new Project(name)
    projects.push(projectcreation); 
    saveapp(); 
    return currentProject = projectcreation;
 }

 export function selectProject(project) {
 currentProject = project;
 }

 export function deleteProject(project) {
  projects = projects.filter(eachproject => {
    return eachproject !== project;
  });  
 
  saveapp();
 }

 export function renameProject(newprojectname) {
  currentProject.name = newprojectname;
  saveapp()
 }

 
export function selectTodo(todo) {
  currentTodo = todo;
}

export function callRemoveTodo(todoToRmove) {
  currentProject.removeTodo(todoToRmove);
  saveapp()
}

export function callAddTodo(title, description, dueDate, priority) {
  const todoCall = new Todo(title, description, dueDate, priority);
   currentProject.addTodo(todoCall);
   console.log(currentTodo)
  saveapp();
  return todoCall;
}

export function renameTodo( newTodoName, newTodoDescription, newTodoDate, newTodoPriority) {
  currentTodo.title = newTodoName;
  currentTodo.description = newTodoDescription;
  currentTodo.dueDate = newTodoDate;
  currentTodo.priority = newTodoPriority;
  saveapp();
}

export function saveapp() {
  localStorage.setItem('projects', JSON.stringify(projects));
}



