// import blah from './real.js';
// import './style.css';

// ---real


// ---dom


console.log("hah");

//lists
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

let createListButton = document.querySelector(".create-list-button");
let createListDiv = document.querySelector(".create-list");
let createListSubmit = document.querySelector(".create-list .submt");
let createListCancel = document.querySelector(".create-list .cancel");
createListButton.onclick = function(){
    createListDiv.removeAttribute('hidden');
};
createListSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    createListDiv.setAttribute('hidden', 'hidden');
    createListButton.removeAttribute('hidden');
    document.querySelector(".create-list form").reset();
});
createListCancel.addEventListener("click", (event) => {
    event.preventDefault();
    createListDiv.setAttribute('hidden', 'hidden');
    document.querySelector(".create-list form").reset();
});

//lists done

//tasks

//button
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
    createTaskForm.reset();
});

let createTaskCancel = document.querySelector(".create-task .cancel");
createTaskCancel.addEventListener('click', (event) => {
    event.preventDefault();
    createTaskDiv.setAttribute('hidden', 'hidden');
    createTaskForm.reset();

});

//complete
let expandButton = document.querySelector(".expand");
let minimizeButton = document.querySelector(".minimize");
let completeDiv = document.querySelector(".complete .midd");
expandButton.onclick = function(){
    expandButton.classList.add('hide');
    minimizeButton.classList.remove('hide');
    completeDiv.classList.remove('hide');
};
minimizeButton.onclick = function(){
    minimizeButton.classList.add('hide');
    expandButton.classList.remove('hide');
    completeDiv.classList.add('hide');
};

//expanding
