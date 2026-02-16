const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function () {
  const text = input.value.trim();
  if (text === '') return;
  addTask(text);
  input.value = '';
  input.focus();
});

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') addBtn.click();
});

function addTask(text) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      label.classList.add('done');
    } else {
      label.classList.remove('done');
    }
  });

  const label = document.createElement('span');
  label.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.className = 'del-btn';
  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}