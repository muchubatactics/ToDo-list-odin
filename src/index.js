// import blah from './real.js';
import './style.css';
import List from './list.js';
import Task from './task.js'
import { selectList } from './list.js';
import { getSelectedList } from './list.js';
import { getTaskFromNode } from './task.js';

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
                selectList(this);
                domMethods.renderTasksFromSelectedList();
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
        let detailValue = document.getElementById('tdetail').value;
        if (detailValue == '') detailValue = 'No Details';
        let newTask = Task(document.getElementById('tnam').value, detailValue, 'No Due date');
        newTask.listName = getSelectedList().name;
        getSelectedList().tasks.push(newTask);
        newTask.makeTask();
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

    function makeTaskListeners() 
    {
        let tasks = document.querySelectorAll('.task');
        Array.from(tasks).forEach((task) => {
            task.addEventListener('click', () => {
                domMethods.expandTaskDOM(getTaskFromNode(task));
            })
        });

    }

    function makeExpandedListeners()
    {
        let expanded = document.querySelectorAll('.expanded-task');
        Array.from(expanded).forEach((exptask) => {
            exptask.childNodes[0].childNodes[1].onclick = function(){
                domMethods.minimizeTaskDOM(getTaskFromNode(exptask), this);
            };
        });
    }

    return {
        addTaskButton,
        createTaskDiv,
        createTaskForm,
        createTaskCancel,
        expandButton,
        minimizeButton,
        completeDivMid,
        completeDiv,
        makeTaskListeners,
        makeExpandedListeners,

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
        taskFunctionality.makeTaskListeners();
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

    function selectListDOM(list)
    {
        //use only in initialize
        list.selected = true;
        list.nodeRef.classList.add('selected');
    }

    function initialize()
    {
        let importantList = List('Important');
        importantList.makeList();
        makeImportantList(importantList);

        let defaultList = List('My Tasks');
        defaultList.makeList();
        domMethods.makeListDOM(defaultList);

        selectListDOM(defaultList);

    }

    function clearRenderedTasks()
    {
        Array.from(document.querySelectorAll('.task')).forEach((task) => {
            task.remove();
        })
        Array.from(document.querySelectorAll('.expanded-task')).forEach((task) => {
            task.remove();
        })
    }

    function renderTasksFromSelectedList()
    {
        clearRenderedTasks();
        getSelectedList().tasks.forEach((task) => {
            makeTaskDOM(task);
        });
        taskFunctionality.makeTaskListeners();
    }

    function expandTaskDOM(task)
    {
        task.nodeRef.classList.remove('task');
        task.nodeRef.classList.add('expanded-task');

        task.nodeRef.innerHTML = `<div class="top">
        <svg class="back" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
        <div></div>
        <svg class="important-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>
        <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        </div>
        <div class="exp-body">
        <div class="list-name">${task.listName}</div>
        <div class="exp-title">${task.name}</div>
        <div class="details">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/></svg>
            <span>${task.details}</span>
        </div>
        <div class="time-date">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
            <span>${task.dueDate}</span>
        </div>
        <div class="sub-tasks">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z"/></svg>
            <span>Add subtasks</span>
        </div>
        </div>`;
        taskFunctionality.makeExpandedListeners();
    }

    function minimizeTaskDOM(task, arrow)
    {
        //UNDERSTAND WHY THIS ISN'T WORKING

        // arrow.parentElement.parentElement.classList.remove('expanded-task');
        // arrow.parentElement.parentElement.classList.add('task');
        let temp = document.createElement('div');
        temp.classList.add('task');
        temp.innerHTML = `<svg class="circle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        <div class="task-title">${task.name}</div>
        <svg class="important-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>
        <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        `;
        arrow.parentElement.parentElement.parentElement.replaceChild(temp, arrow.parentNode.parentNode);
        task.nodeRef = temp;
        taskFunctionality.makeTaskListeners();
        // let temp = arrow;
        // console.log(temp.classList);
        // temp.classList.remove('expanded-task');
        // console.log(temp.classList);

        // temp.classList.add('task');
        // console.log(temp.classList);


        // // console.log(task.nodeRef);


    

        // temp.innerHTML = `<svg class="circle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        // <div class="task-title">${task.name}</div>
        // <svg class="important-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>
        // <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        // `;
        // task.nodeRef = temp;


        // console.log(task.nodeRef.innerHTML);
        // console.log(task.nodeRef);

    }

    return {
        makeListDOM, makeTaskDOM, initialize, renderTasksFromSelectedList, expandTaskDOM, minimizeTaskDOM,
    };
}();

domMethods.initialize();