const input = document.querySelector(".toDo__Input");
const button = document.querySelector(".toDo__Btn");
const list = document.querySelector(".toDo__List");

button.addEventListener("click", () => {
    const inputValue = input.value.trim();

    if (inputValue !== "") {
        const li = document.createElement('li');
        li.className = "toDo__Item";
        li.innerText = input.value;
        list.appendChild(li);
        input.value = "";
    
        const deleteBtn = document.createElement('button');
        deleteBtn.className = "toDo__Item__Btn"
        deleteBtn.innerText = "X";
    
        li.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
            if (confirm("Ви впевнені, що хочете видалити цей елемент зі списку?"))
            list.removeChild(li);
            
            updateLiNumbers();
        })
    }else {
        alert("Будь ласка, введіть щось перед додаванням.")
    }
})
