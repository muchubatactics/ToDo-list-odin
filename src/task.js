let tasksArray = [];
let completeTasksArray = [];

import { getSelectedList } from "./list";
import { deleteTaskFromLists } from "./list";
import { addTaskToImportantList } from "./list";

export default function(name, details, dueDate)
{

    function expandTask()
    {

    }

    function minimizeTask()
    {
        
    }

    function deleteTask()
    {
        console.log('here');
        if (this.important)
        {
            deleteTaskFromLists(this.name, 'Important');
        }
        deleteTaskFromLists(this.name, this.listName);
        tasksArray.splice(tasksArray.indexOf(this), 1);
    }

    function makeImportant()
    {
        this.important = true;
        addTaskToImportantList(this);
    }

    function completeTask()
    {

    }

    function makeTask()
    {
        tasksArray.push(this);
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