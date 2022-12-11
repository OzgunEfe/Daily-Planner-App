// This function writes the current day time
var currentDay = moment().format('dddd, MMMM Do');

$('#currentDay').text(currentDay);

// This function writes the time blocks
var time = moment(09, 'HH');

while(time.hour() < 17) {
    $('body').append(`
    <main>
    <span class="hour">${time.format('hA')}</span>
    <textarea id="${time.format('H')}" class="time-block" name="text-area"></textarea>
    <button class="saveBtn">
      <img
        src="./assets/save-icon.png"
        alt="save-icon"
        height="30px"
        width="32px"
      />
    </button>
    </main>
    `);

    time.add(1, 'hours');
};

// This condition checks past, future and current time
var currentTime = Number(moment().format('H'));
 
for(i=9; i<17; i++){
    if (currentTime == i){
        $(`#${i}`).addClass('present');
    } else if(currentTime > i){
        $(`#${i}`).addClass('past');
    } else if (currentTime < i){
        $(`#${i}`).addClass('future');
    }
}



