function openTaskModal() {
    document.getElementById('taskModal').style.display = 'block';
}

function closeTaskModal() {
    document.getElementById('taskModal').style.display = 'none';
}

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskTime = document.getElementById('taskTime').value;
    const taskUrgency = document.getElementById('taskUrgency').value;
    const taskImportance = document.getElementById('taskImportance').value;

    const task = document.createElement('li');
    task.textContent = `${taskName} - ${taskTime} min`;

    if (taskImportance === 'important' && taskUrgency === 'urgent') {
        document.getElementById('do-list').appendChild(task);
    } else if (taskImportance === 'important' && taskUrgency === 'not-urgent') {
        document.getElementById('decide-list').appendChild(task);
    } else if (taskImportance === 'not-important' && taskUrgency === 'urgent') {
        document.getElementById('delegate-list').appendChild(task);
    } else {
        document.getElementById('delete-list').appendChild(task);
    }

    closeTaskModal();
    document.getElementById('taskForm').reset();
}
