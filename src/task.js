let tasksArray = [];
let completeTasksArray = [];

import { deleteTaskFromLists } from "./list";
import { addTaskToList } from "./list";
import storage from './storage.js'

export default function(name, details, dueDate)
{
    function Completed(name)
    {
        return {name};
    }

    function expandTask()
    {

    }

    function minimizeTask()
    {
        
    }

    function deleteTask()
    {
        if (this.important)
        {
            deleteTaskFromLists(this.name, 'Important');
        }
        deleteTaskFromLists(this.name, this.listName);
        tasksArray.splice(tasksArray.indexOf(this), 1);
        storage.deleteT(this);
    }

    function makeImportant()
    {
        this.important = true;
        addTaskToList(this, 'Important');
        storage.updateTaskStorage(this);
    }

    function removeImportance()
    {
        this.important = false;
        deleteTaskFromLists(this.name, 'Important');
        storage.updateTaskStorage(this);
    }

    function completeTask()
    {
        completeTasksArray.push(Completed(this.name));
        storage.addCompleteTaskStorage(this.name);
        this.nodeRef = null;
        this.deleteTask();
    }

    function makeTask()
    {
        tasksArray.push(this);
    }

    function getFormattedDate()
    {
        if(this.dueDate == '') return 'No Due Date';
        let temp = this.dueDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        let date = new Date(Number(temp[1]), Number(temp[2]) - 1, Number(temp[3]));
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${days[date.getDay()]}, ${months[date.getMonth()]} ${temp[3]}`;
    }

    return {
        name,
        details,
        dueDate,
        listName: '',
        expandTask,
        minimizeTask,
        deleteTask,
        makeImportant,
        completeTask,
        makeTask,
        nodeRef: null,
        important: false,
        removeImportance,
        getFormattedDate,
        ID: null,
    };
}

export function getTaskFromNode(nodeRef){
    for(let i = 0; i < tasksArray.length; i++)
    {
        if(tasksArray[i].nodeRef == nodeRef) //&& tasksArray[i].listName == getSelectedList().name
        {
            return tasksArray[i];
        }
    }
};

export function getNumberOfCompleteTasks(){
    return completeTasksArray.length;
};

export function addCompleteFromStorage(task)
{
    completeTasksArray.push(task);
}