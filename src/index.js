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

