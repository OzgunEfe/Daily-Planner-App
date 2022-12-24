// This function writes the current date and time to the header section.
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// This function writes the time blocks.
function renderList() {
  var time = moment(09, "HH");
  var hour = time.hour();
  var currentTime = Number(moment().format("H"));

  for (i = hour; i < 23; i++) {
    var colorClass = "";

    // This conditional checks the hour. According to the hour, it gives the background colour to the text area.
    if (currentTime == i) {
      colorClass = "present";
    } else if (currentTime > i) {
      colorClass = "past";
    } else if (currentTime < i) {
      colorClass = "future";
    }

    // This section is my time block HTML codes.
    $("#list").append(`
        <div class='list--item'>
            <span class="hour">${time.format("hA")}</span>
            <textarea 
            data-textArea="textArea-${time.format("H")}"
            class="time-block ${colorClass}"
            name="text-area"></textarea>
            <button 
                data-textAreaId="${time.format("H")}"
                class="saveBtn">
                <img 
                  src="./assets/save-icon.png"
                  alt="save-icon"
                  height="30px"
                  width="32px"
                />
            </button>
        </div>
    `);

    time.add(1, "hours");
  }
}
renderList();
displayTasks();

// Local Storage Functions
function saveTasks(arr) {
  localStorage.setItem("Tasks", JSON.stringify(arr));
}

// It hides the Notification section.
function hideNotification() {
  saveTaskNotification.addClass("hide");
}

// It selects the Notification section.
var saveTaskNotification = $(".notification");

taskList = [];
// Save button function
$(".saveBtn").on("click", function (event) {
  var button = $(event.target).closest("button");
  var textAreaId = button.attr("data-textAreaId");
  var textArea = $(`[data-textArea="textArea-${textAreaId}"]`);

  var textAreaVal = textArea.val();
  console.log(textAreaVal);
  console.log(textAreaId);

  saveTaskNotification.removeClass("hide");
  setTimeout(hideNotification, 3000);

  var textAndId = {
    id: textAreaId,
    text: textAreaVal,
  };

  taskList.push(textAndId);

  saveTasks(taskList);
});

function displayTasks() {
  var taskList = JSON.parse(localStorage.getItem("Tasks")) || [];

  taskList.forEach(function (taskList) {
    $(`[data-textArea="textArea-${taskList.id}"]`).text(taskList.text);
  });
}

