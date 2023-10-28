function submitTask(){
  //Variablen
  let isClicked = false;
  let inputBar = document.getElementById('inputBar');
  let taskCollection = document.getElementById('taskCollection');
  let deleteAllButton = document.getElementById('deleteAllButton');
  let taskDiv = document.createElement('div');
  taskDiv.className = 'taskDiv';
  let task = document.createElement('p');
  task.className = 'task';
  let deleteTask = document.createElement('p');
  deleteTask.className = 'deleteTask';
  deleteTask.textContent = 'X';

  //Hinzufügen
  if(inputBar.value !== ''){
    taskCollection.appendChild(taskDiv).appendChild(task).textContent = inputBar.value;
    taskDiv.appendChild(deleteTask);
    inputBar.value = '';
  }

  //Task löschen
  deleteTask.onclick = () => {
    taskDiv.style.opacity = '0%';
    setTimeout(() => {
      taskDiv.remove();
    }, 200)
  }

  //Alles löschen
  deleteAllButton.onclick = () => {
    taskCollection.innerHTML = '';
    inputBar.value = '';
  }

  //Check Task
  task.onclick = () => {
    if(isClicked === false){
      task.style.backgroundColor = 'var(--dcCyanHover)';
      isClicked = true;
    }
    else {
      task.style.backgroundColor = 'var(--dcGray3)';
      isClicked = false;
    }
  }
}

addEventListener('keypress', (e) => {
  if(e.keyCode === 13){
    submitTask();
  }
})