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
            console.log(lists[i]);
        }
        else
        {
            lists[i].selected = false;
        }
    }

    console.log(lists)
};

export function getSelectedList(){
    lists.forEach((list) => {
        if(list.selected) return list;
    });
}

export default Task;

