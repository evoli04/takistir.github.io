
//urun kutusu
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTask = todoInput.value;

  if (newTask === '') {
      alert('Please enter a task!');
      return;
  }
  todoInput.value = '';
  addTask(newTask);
});

function addTask(task) {
  const listItem = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = task;
  listItem.appendChild(taskText);

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  listItem.appendChild(checkBox);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Çıkar';
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

  const editButton = document.createElement('button');
  editButton.textContent = 'Düzenle';
  listItem.appendChild(editButton);

  checkBox.addEventListener('change', function() {
      if (this.checked) {
          taskText.style.textDecoration = 'line-through';
      } else {
          taskText.style.textDecoration = 'none';
      }
  });
 
  deleteButton.addEventListener('click', function() {
      todoList.removeChild(listItem);
  });

  editButton.addEventListener('click', function() {
      const isEditing = listItem.classList.contains('editing');
 
      if (isEditing) {
         
          taskText.textContent = this.previousSibling.value;
          listItem.classList.remove('editing');
          editButton.textContent = 'Edit';
      } else {
         
          const input = document.createElement('input');
          input.type = 'text';
          input.value = taskText.textContent;
          listItem.insertBefore(input, taskText);
          listItem.removeChild(taskText);
          listItem.classList.add('editing');
          editButton.textContent = 'Save';
      }
  });

  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
  const tasks = [];
  document.querySelectorAll('#todo-list li').forEach(task => {
      const taskText = task.querySelector('span').textContent;
      const isCompleted = task.classList.contains('completed');
      tasks.push({ text: taskText, completed: isCompleted });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', function() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => {
      addTask(task.text);
  });
});

//urun kutusu

//username
function validateForm() {
    var username = document.getElementById("username").value;

    // Check if username field is empty
    if (username == "") {
        alert("Username must be filled out");
        return false; // Prevent form submission
    }
}
//username

//renk degistiren click
var button = document.getElementById("myButton");
button.addEventListener("click", function() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    button.style.backgroundColor = randomColor;
});

//renk degistiren click

//Yıldız puanlama
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}
// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}
//Yıldız puanlama

//saat
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Pad single digit minutes and seconds with leading zeros
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Determine AM or PM suffix based on the hour
    var meridiem = (hours < 12) ? "AM" : "PM";
  
    // Convert hours from 24-hour time to 12-hour time
    hours = (hours > 12) ? hours - 12 : hours;
  
    // Convert midnight (0) to 12 AM
    hours = (hours === 0) ? 12 : hours;
  
    // Output the clock
    var clockDiv = document.getElementById("clock");
    clockDiv.textContent = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  }
  
  // Run the updateClock function every second
  setInterval(updateClock, 1000);
  
  // Run the function once at the beginning to initialize the clock
  updateClock();
//saat

//saate gore degisen yazilar
function greet() {
    var now = new Date();
    var hours = now.getHours();
    var greeting;
  
    if (hours < 12) {
      greeting = "Günaydın!";
    } else if (hours < 18) {
      greeting = "İyi günler!";
    } else {
      greeting = "İyi akşamlar!";
    }
  
    document.getElementById("greeting").textContent = greeting;
  }
  greet();

  //saate gore degisen yazilar

  

 //tarih
function makeArray() { 
var args = makeArray.arguments; 
for (var i = 0; i < args.length; i++) { 
this[i] = args[i]; 
} 
this.length = args.length; 
} 

function fixDate(date) { 
var base = new Date(0); 
var skew = base.getTime(); 
if (skew > 0) 
date.setTime(date.getTime() - skew); 
} 

function getString(date) { 
var months = new makeArray("Ocak", "Subat", "Mart", 
"Nisan", "Mayis", "Haziran", 
"Temmuz", "Agustos", "Eylül", 
"Ekim", "Kasim", "Aralik"); 
var days = new makeArray("Pazar", "Pazartesi", "Sali", "Çarsamba", 
"Persembe", "Cuma", "Cumartesi"); 

return date.getDate() + " " + 
months[date.getMonth()] + " " + 
(date.getYear())+ ", " + 
(days[date.getDay()]); 
} 

var cur = new Date(); 
fixDate(cur); 
var str = getString(cur); 
document.write(str); 

//pop-up
alert("Isletmemize hosgeldiniz");

//saate gore yazi

currentTime = new Date();
    if (currentTime.getHours() < 12)
 document.write("Günaydın");
    else if (currentTime.getHours() < 17)
        document.write("İyi Gunler");
    else if (currentTime.getHours() >17)
 document.write("İyi Akşamlar");
    else
 document.write("İyi Geceler");
 
