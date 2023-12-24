
export default function(name)
{
    let lists = [];
    function addTask()
    {
    
    }
    
    function selectList()
    {
    
    }

    function makeList()
    {
        lists.push(this);
    }

    function getSelectedList()
    {

    }

    return {
        name,
        selected: false,
        tasks: [],
        addTask,
        selectList,
        makeList,
        nodeRef: null,

    };
};

