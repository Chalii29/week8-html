(() => {
    let ToDoListArray = [];

    const form = document.querySelector(".form");
    const input = form.querySelector(".form_input");
    const ul = document.querySelector(".ToDoList");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let itemId = String(Date.now());
        let ToDoItem = input.value;
        addItemToDOM(itemId, ToDoItem);
        addItemToArray(itemId, ToDoItem);
        input.value = "";
    });

    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        if(!id) return;
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    function addItemToDOM(itemId, ToDoItem){
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId)
        li.innerText = ToDoItem;
        ul.appendChild(li);
    }

    function addItemToArray(itemId, ToDoItem){
        ToDoListArray.push({itemId, ToDoItem});
        console.log(ToDoListArray);
    }

    function removeItemFromDOM(id){
        var li = document.querySelector('[data-id="' + id + '"]');
        ul.removeChild(li);
    }

    function removeItemFromArray(id){
        ToDoListArray = ToDoListArray.filter((item) => item.itemId !== id);
        console.log(ToDoListArray);
    }
})();