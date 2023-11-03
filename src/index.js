//listen for an event on the create new task button 

//take the value of that event and add it to a task list

//the task list should display in the My To do's section


document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("create-task-form").addEventListener('submit', handleNewTask);
      

    function handleNewTask(event) {
      event.preventDefault();
      const taskDescription = document.getElementById('new-task-description').value; 
      const taskPriority = document.getElementById('task-priority').value;

      if (taskDescription.trim() !== '') {
        
        let newTask = document.createElement('li');
        newTask.textContent = taskDescription + ' - Priority: ' + taskPriority;

        switch(taskPriority) {
          case 'Low':
            newTask.className = 'priority-low';
            break;
          case 'Medium':
            newTask.className = 'priority-medium';
            break;
          case 'High':
            newTask.className = 'priority-high';
            break;
          default:
        }



        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = 'delete-task-button';

        newTask.appendChild(deleteButton);

        document.getElementById('tasks').appendChild(newTask);
        
        deleteButton.addEventListener('click', function(){
          newTask.remove();
        });
        
        document.getElementById('new-task-description').value = '';
        document.getElementById('task-priority').value = '';

      } else {
        alert('Please enter a task description.');
      }
    
    }

       

});

