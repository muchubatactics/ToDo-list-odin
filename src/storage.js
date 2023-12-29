import taskx from "./task.js";
let x = function(){
//function from MDN
    
    function storageAvailable(type) {
        let storage;
        try {
          storage = window[type];
          const x = "__storage_test__";
          storage.setItem(x, x);
          storage.removeItem(x);
          return true;
        } catch (e) {
          return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
              // Firefox
              e.code === 1014 ||
              // test name field too, because code might not be present
              // everything except Firefox
              e.name === "QuotaExceededError" ||
              // Firefox
              e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
          );
        }
      };
      
    // end of function from MDN

    let isEnabled = storageAvailable('LocalStorage');

    function isStorageEnabled() //not used yet
    {
        return isEnabled;
    }

    let id = 0;
    
    function addToStorage(task) {
        task.ID = id;
        localStorage.setItem(`name${id}`, task.name);
        localStorage.setItem(`details${id}`, task.details);
        localStorage.setItem(`dueDate${id}`, task.dueDate);
        localStorage.setItem(`listName${id}`, task.listName);
        localStorage.setItem(`important${id}`, task.important);
        id++;
        localStorage.setItem('ID', id);
    };
    
    function getTasksFromStorage() {
        let taskArray = [];
        let completeArray = [];
        let refArr = [];
        let sID = -1;
        let refIndex = 0;
        let tempVal;
        for(let key in localStorage)
        {
            if(key == 'ID') continue;
            if(/^c\d/.test(key))
            {
                completeArray.push({
                    name: `${localStorage.getItem(key)}`,
                });
                continue;
            }
            tempVal = localStorage.getItem(key);
            if (tempVal == 'false') tempVal = false;
            if (tempVal == 'true') tempVal = true;
            let temp = key.match(/\d+$/);
            if(temp)
            {
                sID = Number(temp[0]);
                refIndex = refArr.indexOf(sID);
                if(refIndex == -1)
                {
                    let newTask = taskx('', '', '');
                    newTask.ID = sID;
                    if (sID > 9)
                    {
                        newTask[temp['input'].slice(0, -2)] = tempVal;
                    }
                    if (sID > 99)
                    {
                        newTask[temp['input'].slice(0, -3)] = tempVal;
                    }
                    else
                    {
                        newTask[temp['input'].slice(0, -1)] = tempVal;
                    }
                    taskArray.push(newTask);
                    refArr.push(sID);
                }
                else
                {
                    if (sID > 9)
                    {
                        taskArray[refIndex][temp['input'].slice(0, -2)] = tempVal;
                    }
                    if (sID > 99)
                    {
                        taskArray[refIndex][temp['input'].slice(0, -3)] = tempVal;
                    }
                    else
                    {
                        taskArray[refIndex][temp['input'].slice(0, -1)] = tempVal;
                    }
                }
            }
        }
        return {taskArray, completeArray};
    }

    function initStorage()
    {
        localStorage.setItem('ID', '0');
    }

    function updateTaskStorage(task)
    {
        localStorage.setItem(`name${task.ID}`, task.name);
        localStorage.setItem(`details${task.ID}`, task.details);
        localStorage.setItem(`dueDate${task.ID}`, task.dueDate);
        localStorage.setItem(`listName${task.ID}`, task.listName);
        localStorage.setItem(`important${task.ID}`, task.important);
    }

    function setID()
    {
        id = localStorage.getItem('ID');
    }

    function deleteT(task)
    {
        localStorage.removeItem(`name${task.ID}`);
        localStorage.removeItem(`details${task.ID}`);
        localStorage.removeItem(`dueDate${task.ID}`);
        localStorage.removeItem(`listName${task.ID}`);
        localStorage.removeItem(`important${task.ID}`);
    }

    function addCompleteTaskStorage(name)
    {
        localStorage.setItem(`c${id}`, name);
        id++;
        localStorage.setItem('ID', id);
    }

    return {
        addToStorage,
        getTasksFromStorage,
        isStorageEnabled,
        initStorage,
        updateTaskStorage,
        setID,
        deleteT,
        addCompleteTaskStorage,
    };

}();

export default x;