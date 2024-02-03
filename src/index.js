document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('#create-task-form');
  const taskInput = form.querySelector('#new-task-description')
  const taskList = document.querySelector('#list');

  form.addEventListener('submit', e => {
    e.preventDefault();
    addListItem(taskInput.value);
    taskInput.value = '';
  })

  function addListItem(item) {
    let li = document.createElement('li');
    li.textContent = item;
    addDelete(li);
    taskList.append(li);
  }

  function addDelete(item) {
    let span = document.createElement('span');
    span.className = 'delete';
    span.textContent = '\u{02715}';
    span.addEventListener('click', () => span.parentNode.remove())
    item.append(span);
  }

});
