import { 
    projects,
    currentProject,
    currentTodo,
    createProject,
    selectProject,
    deleteProject,
    renameProject,
    selectTodo,
    callRemoveTodo,
    callAddTodo,
    renameTodo,
 } from './application-actions.js';

 import {
    Todo,
    Project
 } from './object-project-todo.js';
// ===========================================================================
//                       DOM REFRRENCES
// ===========================================================================
export const container = document.querySelector('.container');
export const container2 = document.querySelector('.container2');
export const startContainer = document.querySelector('.start-container');
export const startBtn = document.querySelector('.startTheApp');
export const name5 = document.querySelector('.name5');
export const applayout = document.querySelector('.app');
export const sidebar = document.querySelector('.sidebar');
export const addProject = document.querySelector('.addproject');
export const input = document.querySelector('.project-name-input');
export const projectItem = document.querySelector('.project-item');
export const content = document.querySelector('.content');
export const projectName = document.querySelector('.project');
export const projectList = document.querySelector('.project-list');
export const deleteP = document.querySelector('.deletep');
export const renameP = document.querySelector('.rename');
export const renameInput = document.querySelector('.rename-input');
export const detailPanel = document.querySelector('.detail-panel');
export const addTodo = document.querySelector('.addtodo');
export const todoModal = document.querySelector('.todo-modal');
export const todoTitle = document.querySelector('#todo-title');
export const todoDescription = document.querySelector('#todo-description');
export const todoDate = document.querySelector('#todo-date');
export const todoPriority = document.querySelector('#todo-priority');
export const saveBtn = document.querySelector('.save-todo');
export const cancelBtn = document.querySelector('.cancel-todo');
export const todoName = document.querySelector('.todos');
export const todoList = document.querySelector('.todo-list');
export const detailTitle = document.querySelector('.detail-title');
export const detailDescription = document.querySelector('.detail-field-value');
export const detailDate = document.querySelector('.detail-field-date');
export const detailpriority = document.querySelector('.detail-field-priority');
export const editTodo = document.querySelector('.edit-todo');
export const deleteTodo = document.querySelector('.delete-todo');
export const editTitle = document.querySelector('#title-edit-input');
export const editDescription = document.querySelector('#description-edit-input');
export const editDate = document.querySelector('#date-edit-input');
export const editPriority = document.querySelector('#priority-edit-input');
export const editcontainer = document.querySelector('.todo-edit-input-container');
// ===========================================================================
//                       HANDLLER FUNCTIONS(CALLING FUNCTIONS)
// ===========================================================================
function handlCereateProjects(name) {
    createProject(name);
};

function handleSelectProject(project) {
    selectProject(project);
};

function handleDeleteProject(project) {
    deleteProject(project);
};

function handleRenameProject(newProjectName) {
    renameProject(newProjectName);
};

function handleSelectTodo(todoTitle, todoDescription, todoDate, todoPriority) {
    selectTodo(todoTitle, todoDescription, todoDate, todoPriority);
};

function handleCreateTodo(title,
    description,
    dueDate,
    priority)
     {
    callAddTodo(title,
        description,
        dueDate,
        priority)
};

function handleRemoveTodo(todoToRemove) {
    callRemoveTodo(todoToRemove)
};

function handleRenameTodo(newTodoName, newTodoDescription, newTodoDate, newTodoPriority) {
    renameTodo(newTodoName, newTodoDescription, newTodoDate, newTodoPriority);
};

// ===========================================================================
//                          RENDERING FUNCTIONS
// ===========================================================================
 
function renderProjects() {
    input.value = '';
    projectList.innerHTML = '';
    projects.forEach((project) => {
        const projectElement = document.createElement('button');
        projectElement.textContent = project.name;
        projectElement.classList.add('project-item');
        projectElement.addEventListener('click', () => {
            handleSelectProject(project);
            todoList.textContent = '';
            renderTodos();
       content.style.display = 'flex';
       detailPanel.style.display = 'none';
       todoName.textContent = project.name;
})
      renameP.addEventListener('click', () => {
    renameInput.style.display = 'block';
    renameInput.value = currentProject.name;
    projectElement.replaceWith(renameInput);
    renameInput.focus();
});
        projectList.appendChild(projectElement);
    });
}

function renderSelectedProject(project) {
 const projectTitle = document.createElement('button');
    projectTitle.textContent = project.name;
    projectTitle.classList.add('project-item');
    sidebar.appendChild(projectTitle);
}

function renderTodos() {
    todoList.innerHTML = '';
    currentProject.todos.forEach((todo) => {
        const todoElement = document.createElement('button');
        todoElement.textContent = `${todo.title}`;

        todoElement.addEventListener('click', () => {
            handleSelectTodo(todo);
            detailTitle.textContent = currentTodo.title;
            detailDescription.textContent = currentTodo.description;
            detailDate.textContent = currentTodo.dueDate;

            if(currentTodo.priority === 'high') {
                detailpriority.style.color = '#c6563a';
                detailpriority.textContent = currentTodo.priority;
            } else if (currentTodo.priority === 'medium') {
                detailpriority.style.color = '#c7a44a';
                detailpriority.textContent = currentTodo.priority;
            } else if(currentTodo.priority === 'low') {
                detailpriority.style.color = '#2a713b';
                detailpriority.textContent = currentTodo.priority;
            }
            detailPanel.style.display = 'block';
            
        });

        editTodo.addEventListener('click', () => {
    editcontainer.style.display = 'block';
});
    editcontainer.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        handleRenameTodo(editTitle.value, editDescription.value, editDate.value, editPriority.value);
        detailTitle.textContent = editTitle.value;
        detailDescription.textContent = editDescription.value;
        detailDate.textContent = editDate.value;
        detailpriority.textContent = editPriority.value;
        if(editPriority.value === 'high') {
    detailpriority.style.color = '#c6563a';
} else if(editPriority.value === 'medium') {
    detailpriority.style.color = '#c7a44a';
} else if(editPriority.value === 'low') {
    detailpriority.style.color = '#2a713b';
}
        editcontainer.style.display = 'none';
        renderTodos();
    } else {
        return;
    }
});

deleteTodo.addEventListener('click', () => {
    handleSelectTodo(todo);
    handleRemoveTodo(todo);
    detailPanel.style.display = 'none';
    renderTodos();
});

        todoList.appendChild(todoElement);
    });
}

function renderSelectedTodo() {
    content.textContent =  currentTodo.title;
}

// ==========================================================================
//                          EVENT LISTENER
// ===========================================================================
applayout.style.display = 'none';
todoModal.style.display = 'none';
editcontainer.style.display = 'none';
 startBtn.addEventListener('click', () => {
    container2.style.display = 'none';
    startContainer.style.display = 'none';
    applayout.style.display = 'grid';
    content.style.display = 'none';
    detailPanel.style.display = 'none';
    renameInput.style.display = 'none';
    projects.length = 0;
    renderProjects();
});

container.addEventListener('click', () => {
    startBtn.style.display = 'block';
    container2.style.display = 'block';
    startContainer.style.display = 'flex';
    startContainer.style.margin = '30px';
    applayout.style.display = 'none';
});


addProject.addEventListener('click', () => {
    const userInput = input.value;
    if(userInput === '') {
        console.log('write something!')
    } else {
    handlCereateProjects(userInput);
    renderProjects();
}});

 deleteP.addEventListener('click', () => { 
    handleDeleteProject(currentProject);
    content.style.display = 'none';  
    detailPanel.style.display = 'none';
    renderProjects();
});

renameInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
    handleRenameProject(renameInput.value);
    renameInput.value = '';
    renameInput.style.display = 'none';
    renderProjects();
} else {
    return;
}});

addTodo.addEventListener('click', () => {
   todoModal.style.display = 'flex';
    todoTitle.value = '';
            todoDescription.value = '';
            todoDate.value = '';
            todoPriority.value = '';
});

cancelBtn.addEventListener('click', () => {
    content.style.display = 'flex';
    todoModal.style.display = 'none';
})

saveBtn.addEventListener('click', () => {
    handleCreateTodo(
        todoTitle.value,
        todoDescription.value,
        todoDate.value,
        todoPriority.value
    );

    todoTitle.value = '';
    todoDescription.value = '';
    todoDate.value = '';
    todoPriority.value = '';

    todoModal.style.display = 'none';
    renderTodos();
    content.style.display = 'flex';
    detailPanel.style.display = 'none';
});