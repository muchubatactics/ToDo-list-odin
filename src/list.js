let lists = [];

function Task(name)
{
    function addTask()
    {
    
    }
    
    function makeList()
    {
        lists.push(this);
    }

    return {
        name,
        selected: false,
        tasks: [],
        addTask,
        makeList,
        nodeRef: null,

    };
};

export function selectList(nodeRef){
    for (let i = 0; i < lists.length; ++i)
    {
        if(lists[i].nodeRef == nodeRef)
        {
            lists[i].selected = true;
        }
        else
        {
            lists[i].selected = false;
        }
    }

};

export function getSelectedList(){
    let retList;
    lists.forEach((list) => {
        if(list.selected)
        {
            retList = list;
        }
    });

    return retList;
}

export default Task;

export function deleteTaskFromLists(taskName, listName)
{
    for (let i = 0; i < lists.length; ++i)
    {
        if (lists[i].name == listName)
        {
            for(let m = 0; m < lists[i].tasks.length; ++m)
            {
                if(lists[i].tasks[m].name == taskName)
                {
                    lists[i].tasks.splice(m, 1);
                }
            }
        }
    }

}

export function addTaskToImportantList(task)
{
    for(let i = 0; i < lists.length; ++i)
    {
        if(lists[i].name == 'Important')
        {
            lists[i].tasks.push(task);
        }
    }
}

