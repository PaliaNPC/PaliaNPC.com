// Function to set a cookie
function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days expiry
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Function to update checkbox and cookie status
function updateStatus(taskId) {
  var taskElement = document.getElementById(taskId);
  var isChecked = taskElement.checked ? "true" : "false";
  setCookie(taskId, isChecked);
}

// Function to initialize the checkbox statuses from cookies
function initializeStatus() {
  for (var i = 93; i <= 184; i++) {
    var taskId = "task" + i;
    var cookieValue = getCookie(taskId);
    if (cookieValue === "true") {
      document.getElementById(taskId).checked = true;
    }
    document.getElementById(taskId).addEventListener("change", function() {
      updateStatus(this.id);
    });
  }
}

function uncheckAll() {
  document.querySelectorAll('input[type="checkbox"]')
    .forEach(el => el.checked = false);

  for (var i = 93; i <= 184; i++) {
    document.getElementById('task' + i).checked = false;
    // Update or clear the cookie
    document.cookie = 'task' + i + '=false; path=/';
  }
}

document.querySelector('button').addEventListener('click', uncheckAll)

// Call the initialize function when the page loads
initializeStatus();
