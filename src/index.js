// import blah from './real.js';
import './style.css';
import List from './list.js';
import Task from './task.js'


// ---dom
//lists

let listFunctionality = function(){
    function makeListeners()
    {
        let lists = Array.from(document.querySelectorAll(".list"));
        for (let i = 0; i < lists.length; ++i)
        {
            lists[i].onclick = function(){
                if (this.classList.contains('selected')) return;
                lists.forEach((node) => {
                    node.classList.remove('selected');
                });
                this.classList.add("selected");
            }
        }
    };  
    
    let createListButton = document.querySelector(".create-list-button");
    let createListDiv = document.querySelector(".create-list");
    let createListSubmit = document.querySelector(".create-list .submt");    
    let createListCancel = document.querySelector(".create-list .cancel");
    let addListDiv = document.querySelector('.add-list');

    createListButton.onclick = function(){
        createListDiv.removeAttribute('hidden');
    };
    createListSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        createListDiv.setAttribute('hidden', 'hidden');
        createListButton.removeAttribute('hidden');
        
        //
        let name = document.querySelector(".create-list form input").value;
        let newlist = List(name);
        newlist.makeList();
        domMethods.makeListDOM(newlist);
    

        //
        document.querySelector(".create-list form").reset();
    });
    createListCancel.addEventListener("click", (event) => {
        event.preventDefault();
        createListDiv.setAttribute('hidden', 'hidden');
        document.querySelector(".create-list form").reset();
    });

    return {
        createListButton,
        createListDiv,
        createListSubmit,
        createListCancel,
        addListDiv,
        makeListeners,

    }
}();

//lists done

//tasks

let taskFunctionality = function(){
    let addTaskButton = document.querySelector(".add-button div");
    let createTaskDiv = document.querySelector(".create-task");
    addTaskButton.onclick = function(){
        if(createTaskDiv.hasAttribute('hidden'))
        {
            createTaskDiv.removeAttribute('hidden');
            window.scrollTo(0, document.body.scrollHeight);
        } 
    
    };
    let createTaskForm = document.querySelector(".create-task form");
    createTaskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        createTaskDiv.setAttribute('hidden', 'hidden');
        
        //
        let newTask = Task(document.getElementById('tnam').value, document.getElementById('tdetail').value, '');
        domMethods.makeTaskDOM(newTask);



        //
        createTaskForm.reset();
    });
    
    let createTaskCancel = document.querySelector(".create-task .cancel");
    createTaskCancel.addEventListener('click', (event) => {
        event.preventDefault();
        createTaskDiv.setAttribute('hidden', 'hidden');
        createTaskForm.reset();
    
    });

    let expandButton = document.querySelector(".expand");
    let minimizeButton = document.querySelector(".minimize");
    let completeDivMid = document.querySelector(".complete .midd");
    let completeDiv = document.querySelector(".complete");
    expandButton.onclick = function(){
        expandButton.classList.add('hide');
        minimizeButton.classList.remove('hide');
        completeDivMid.classList.remove('hide');
    };
    minimizeButton.onclick = function(){
        minimizeButton.classList.add('hide');
        expandButton.classList.remove('hide');
        completeDivMid.classList.add('hide');
    };

    return {
        addTaskButton,
        createTaskDiv,
        createTaskForm,
        createTaskCancel,
        expandButton,
        minimizeButton,
        completeDivMid,
        completeDiv,

    };
}();



//tasks done

let domMethods = function(){
    function makeListDOM(list)
    {
        let newList = document.createElement('div');
        newList.appendChild(document.createElement('div'));
        let title = document.createElement('div');
        title.innerHTML = list.name;
        newList.appendChild(title);
        newList.classList.add('list');
        listFunctionality.createListButton.before(newList);
        listFunctionality.makeListeners();
        list.nodeRef = newList;
    }

    function makeTaskDOM(task)
    {
        let newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.innerHTML = `<svg class="circle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        <div class="task-title">${task.name}</div>
        <svg class="important-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>
        <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        `;
        task.nodeRef = newTask;
        taskFunctionality.completeDiv.before(newTask);
    }

    function makeImportantList(list)
    {
        let newList = document.createElement('div');
        newList.classList.add('list');
        newList.innerHTML = `<div class=""></div>
        <div>
           <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>
        </div>`;
        listFunctionality.createListButton.before(newList);
        list.nodeRef = newList;
    }

    function initialize()
    {
        let importantList = List('Important');
        importantList.makeList();
        makeImportantList(importantList);

        let defaultList = List('My Tasks');
        defaultList.makeList();
        domMethods.makeListDOM(defaultList);

    }

    function expandTaskDOM()
    {

    }

    function minimizeTaskDOM()
    {

    }

    return {
        makeListDOM, makeTaskDOM, initialize, 
    };
}();

domMethods.initialize();