// linking

const taskinput = document.getElementById("task-input");
const btn = document.getElementById('btn');
const list = document.getElementById('list')

// When I Click...

btn.addEventListener('click', ()=>{

const tasktext = taskinput.value
if(tasktext !== ""){

    const newtask = document.createElement("li");
    newtask.textContent = tasktext;

    newtask.addEventListener('click', ()=>{
        newtask.classList.toggle('completed');
    });
    list.appendChild(newtask);
    taskinput.value = "";
}
});
