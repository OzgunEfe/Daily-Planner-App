// This function writes the current day time
var currentDay = moment().format("dddd, MMMM Do");

$("#currentDay").text(currentDay);

// This function writes the time blocks
var time = moment(09, "HH");

while (time.hour() < 23) {
  $("body").append(`
    <section>
    <span class="hour">${time.format("hA")}</span>
    <textarea id="${time.format(
      "H"
    )}" class="time-block" name="text-area"></textarea>
    <button class="saveBtn">
      <img
        src="./assets/save-icon.png"
        alt="save-icon"
        height="30px"
        width="32px"
      />
    </button>
    </section>
    `);

  time.add(1, "hours");
}

// This condition checks past, future and current time
var currentTime = Number(moment().format("H"));

// currentTime = 10;

for (i = 9; i < 23; i++) {
  if (currentTime == i) {
    $(`#${i}`).addClass("present");
  } else if (currentTime > i) {
    $(`#${i}`).addClass("past");
  } else if (currentTime < i) {
    $(`#${i}`).addClass("future");
  }
}

taskList = [];

// Local Storage Functions
function saveTasks(arr) {
  localStorage.setItem("Tasks", JSON.stringify(arr));
}

function hideNotification() {
  saveTaskNotification.addClass("hide");
}

// Notification text
var saveTaskNotification = $(".notification");

// Save button function
$(".saveBtn").on("click", function () {
  saveTaskNotification.removeClass("hide");
  setTimeout(hideNotification, 3000);

  // Text Area
  var textArea = $("textarea");

  // Get the textarea ID and value
  textArea.change(function () {
    var textareaId = textArea.id;
    var textareaValue = textArea.val();

    var textareaObject = {
      id: textareaId,
      task: textareaValue
    };

		taskList.push(textareaObject);
  });

	saveTasks(taskList);
});

function displayTasks() {
  var taskList = JSON.parse(localStorage.getItem("Tasks")) || [];

  taskList.forEach(function (taskList) {
    $(`#${taskList.id}`).text(taskList.task);
  });
}

// // tiklanan text alaninin id'sini aliyor.
// $("textarea").click(function () {
//   var id = $(this).attr("id");

// // textarea value aliyor.
// $("textarea").change(function () {
// 	var text = $(this).val();
