// Data
// What objects exist?
// answer: projects, todolist-items, appcontroller

// What properties does each object have?
// answer: projects are the space where projects live and todolist-items is the place where to store the name and description and priority and notes and compleeted things of task and task itself

// What relationships exist between objects?
// answer: projects contain todo's 


// Actions
// What can the user do?
// answer: he can add a project and name it and when clicked on it he enters a todo section he can add a todo and check its details by clicking on the to do itself and edit and them and can remove the todo he made and also he can remove the project he made

// What functions are required for those actions?
// answer: createProject with name so he can input a name, selectproject to eenter todolist, deleteproject, reenameproject;
//answer2: createtodolist with name and all properties of it, selecttodo to see the details and edit it, deletetodo, edittodo to edit todolist(markcomplete, changepriority) 


// Ownership
// Which module controls each piece of data?
//answer: project object control project data and todo object controller todo data and appcontroller controllers action

// Which module is allowed to change it?
// answer: project allowed to change data and appcontroller allowed to change action

// Flow
// When the user clicks something, what happens step-by-step?
//answer : User clicks "Add Project"
//        ↓
// UI opens input/form
//         ↓
// User enters project name
//         ↓
// UI sends data to AppController
//         ↓
// AppController calls createProject()
//         ↓
// New Project object is created
//         ↓
// Project is added to projects array
//         ↓
// Storage saves projects to localStorage
//         ↓
// UI renders the new project


// User clicks "Add Todo"
//      ↓
// UI opens Todo form
//      ↓
// User enters:
// - title
// - description
// - due date
// - priority
// - notes
//         ↓
// UI sends data to AppController
//         ↓
// AppController creates Todo object
//         ↓
// Current Project stores Todo
//         ↓
// Storage saves updated projects
//         ↓
// UI displays Todo card
 

// Storage
// Does data disappear after refresh?
// answer: the data keeps the same because of local storage

// Where does persistent data live?
// answer: in local storage


// TO KNOW WHAT TO WRITE INSIDE FUNCTION :

// Input:
// - What information comes in?

// Process:
// - What happens step by step?

// Result:
// - What should be true when the function finishes?

// JavaScript Knowledge:
// - Which JS feature(s) solve each step?

 


// 1. Write the goal in plain English before touching code.
// Not "rename function" — literally write, as a comment: // when user clicks rename on Project X, hide X's name, show an input pre-filled with X's name, and when they press Enter, set X's name to whatever's in the input, then hide the input again. If you can't write this sentence precisely, you don't know what you're building yet — and that's why you're guessing. Code is downstream of a clear sentence, not a substitute for one.

// 2. From that sentence, extract the nouns and verbs separately.
// Nouns = state you need to track (which project is "X" right now? is the input visible or not?). Verbs = events (click, keydown, blur) and actions (hide, show, set). Every verb becomes a candidate function call or listener. Every noun becomes a variable or property you need to read/write. This is literally why I kept asking "where does X come from" — I was making you do this extraction.

// 3. For every line you write, ask: "what does this equal, right now, at this exact point in execution?"
// Not what you want it to equal — what it actually equals given everything that ran before it. This is the single question that caught every bug you've had so far: currentProject being a string, renameInput.value being read before the user typed anything, project being undefined outside its closure. You have to interrogate state at each line, not assume it.

// 4. Don't guess — verify. console.log() liberally, and read the output like evidence, not decoration.
// Before writing the fix, log the thing you're unsure about: console.log(currentProject), console.log(project). If you're not sure whether a listener fires once or five times, put a console.log('listener attached') at the point of attachment and count. You've already been doing this instinctively (your dddd logs) — formalize it as step one whenever you're unsure, before writing the next line of logic.

// 5. Trace time, not just code order.
// Ask explicitly: does this line run immediately when the page loads, or only later when some event fires? And if it's inside an event handler — how many times will this handler run, and does anything change between runs (like innerHTML wiping the DOM)? This is what caught your listener-duplication issue.

// 6. When stuck between two structural choices (like Option A/B/C for rename), list the actual mechanisms out, don't default to whichever comes to mind first. Ask what each one requires you to track and when.



// when user clicks rename project the project name that has been selected to be renamed gett replaced with an input and the user can rename it to any other new name and when he is done he can click enter and the project name will be replaced to the new project name and the input display will vanish the moment he clicks enter

// nouns: a.project name, b.selected project name to new project name, c.input typing this should be a variable, 

// verbs: a.user clicks rename project b.user can rename project to new name c.name selected d.project name get replaced with an input e.user clicks enter to send the data f.input display will vanish when user clicks enter;

//project name = project.name, project.name = newProjectName, renameP.addeventlistener, handleSelectProject(project), this is eventlistenere for to replace with an input, 'keydown', input.style.display = 'none';,
