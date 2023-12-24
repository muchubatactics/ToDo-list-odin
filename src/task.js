let tasksArray = [];
let completeTasksArray = [];

import { getSelectedList } from "./list";

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

    }

    function makeImportant()
    {

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
    };
}

export function getTaskFromNode(nodeRef){
    for(let i = 0; i < tasksArray.length; i++)
    {
        if(tasksArray[i].nodeRef == nodeRef && tasksArray[i].listName == getSelectedList().name)
        {
            return tasksArray[i];
        }
    }
};