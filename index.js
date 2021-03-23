
document.getElementById("add-button").addEventListener("click", function () {

    fetch(`https://simple-json-server-scit.herokuapp.com/todo/dtruta`)

        .then((r) => r.json())
        .then(saveData);
})

function saveData(data){
    const input = document.getElementById("input").value;
    if (Object.keys(data).length === 0) {
        postMethod(input);
    } else {
        putMethod(data.todo, input, false);
    }
    
}

function postMethod(value) {
    const payload = {
        id: "dtruta",
        todo: [{
            checked: false,
            item: value,
        }]

    }

    fetch("https://simple-json-server-scit.herokuapp.com/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }).then(getMethod);
}

function putMethod(oldData, newData, checked) {
    oldData.push({
        checked: checked,
        item: newData
    })

    const payload = {
        id: "dtruta",
        todo: oldData
    }
    
    fetch(`https://simple-json-server-scit.herokuapp.com/todo/dtruta`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(getMethod);
}


getMethod();


function getMethod() {
    fetch(`https://simple-json-server-scit.herokuapp.com/todo/dtruta`)

        .then((r) => r.json())
        .then(renderToDoList);

}

const todoListHtml = document.querySelector("#to-do-list");

function renderToDoList(article) {
    if (Object.keys(article).length === 0) {
        return;
    }

    let todoList = article.todo;
    todoListHtml.innerText = "";

    for (const todo of todoList) {
        let task = document.createElement("div");
        task.setAttribute("class", "task");

        todoListHtml.appendChild(task);

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "task-input-checkbox");
        checkbox.setAttribute("value", todo.item);
        checkbox.checked = todo.checked;

        task.appendChild(checkbox);

        let taskText = document.createElement("div");
        taskText.setAttribute("class", "task-text");
        taskText.innerText = todo.item;


        task.appendChild(taskText);

        let trash = document.createElement("i");
        trash.setAttribute("class", "fas fa-trash");

        task.appendChild(trash);
    }
}