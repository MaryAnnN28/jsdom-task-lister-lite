document.addEventListener("DOMContentLoaded", () => {
  // 1)  be able to type a task into the input field
  // 2)  be able to click some form of a submit button
  // 3)  the task string that I provided should appear
  //     on the DOM after submit button has been activated  
  
  document.querySelector('#create-task-form').addEventListener('submit', submitHandler);
});

function submitHandler(event) {
  event.preventDefault()
  let taskDescripton = event.target.description.value
  let taskDuration = event.target.duration.value
  let taskDueDate = event.target.due.value
  let taskPriority = event.target.querySelector('select').value
  createTask(taskDescripton, taskDuration, taskDueDate, taskPriority)
  }

  function createTask(description, duration, duedate, priority) {
    let li = document.createElement('li')
        li.textContent = `${description} - ${duration}  - ${duedate}  `
        if (priority === "low") {
          li.style.color = "green"
        } else if (priority === "medium") {
          li.style.color = "orange"
        } else {
          li.style.color = "red"
        }
    
    let button = document.createElement('button')
        button.textContent = "X"
        button["data-description"] = description
        button.addEventListener('click', deleteTask)
    
    let ul = document.querySelector('ul')
        li.appendChild(button)
        ul.appendChild(li)
    
    document.querySelector('#create-task-form').reset()
  }

  function deleteTask(event) {
    event.preventDefault()
    
    event.target.parentElement.remove()
  }

