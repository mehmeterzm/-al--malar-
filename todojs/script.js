    const form = document.querySelector('form');
    const input= document.querySelector('#txtTaskName');
    const btnDeleteAll = document.querySelector('#btnDeleteAll');
    const taskList = document.querySelector('#task-list');
    let items;

    // load items
    loadItems();

    eventListeners();

    function eventListeners()
    {
        //submit event
    form.addEventListener('submit',addNewItem);
    //delete item
    taskList.addEventListener('click',deleteItem);
    //delete all items
    btnDeleteAll.addEventListener('click',deleteAllItems);
    }

    function loadItems(){

       items = getItemsFromLS();

    items.forEach(function(item) {
        createItem(item);
    });
    }

    // get items from localstorage
    function getItemsFromLS(){
        if(localStorage.getItem('items')===null){
            items = [];
        }
        else{
            items = JSON.parse(localStorage.getItem('items'));
        }
        return items;
    }

    // set item to local storage
    function setItemToLS(text){
        items = getItemsFromLS();
        items.push(text);
        localStorage.setItem('items',JSON.stringify(items));
    }

    // delete items from LS
    function deleteItemsFromLS(text){
        items= getItemsFromLS();
        items.forEach(function(item,index){
            if(item === text){
                items.splice(index,1);
            }
        });
        localStorage.setItem('items',JSON.stringify(items));
    }

    function createItem(text){
        // create li
    const li =  document.createElement('li')
    li.className ="list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text));


    //create a
    const a = document.createElement('a');
    a.classList= 'delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML= '<i class="fas fa-times"></i>';


        // add a to li
    li.appendChild(a);

    taskList.appendChild(li);
    }

    //Add new item
    function addNewItem(e){
        if(input.value ==='' )
        {
            alert('bir değer giriniz!')
        }
        else{

    //create item
    createItem(input.value);

    //save to localstorage
    setItemToLS(input.value);

    //input clear
    input.value='';
        }
        e.preventDefault();
    }
    // delete item
    function deleteItem(e){
        if(e.target.className==='fas fa-times'){
            e.target.parentElement.parentElement.remove();
            //delete item from localstorage
            deleteItemsFromLS(e.target.parentElement.parentElement.textContent);

        }
        e.preventDefault();
    }

    //delete all items
    function deleteAllItems(e){
    //   taskList.innerHTML='';

    if(confirm('are u sure?')){

    // YÖNTEM 1
        taskList.innerHTML='';
    
        localStorage.clear();
        // YÖNTEM 2 (1 TANESİNİ SİLİYOR)
    //  taskList.childNodes.forEach(function(item){
    //     if(item.nodeType === 1){
    //         item.remove();
    //     }
    //  })

    //YÖNTEM 3 (TEK TEK SORU SORUYOR) en temizi bu!!!!
    // while (taskList.firstChild) {
    //     taskList.removeChild(taskList.firstChild);
    // }
    }
    e.preventDefault();
    }