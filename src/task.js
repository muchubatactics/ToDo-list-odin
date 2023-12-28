let tasksArray = [];
let completeTasksArray = [];

import { deleteTaskFromLists } from "./list";
import { addTaskToList } from "./list";

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
        addTaskToList(this, 'Important');
    }

    function removeImportance()
    {
        this.important = false;
        deleteTaskFromLists(this.name, 'Important');
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
        removeImportance,
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