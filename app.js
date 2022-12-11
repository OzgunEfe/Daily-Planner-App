// Guncel saati yazdirdim
var currentDay = moment().format('dddd, MMMM Do');

$('#currentDay').text(currentDay);

// Calisma saatlerini 9-5 yazdirdim.
var time = moment(09, 'HH');

while(time.hour() < 23) {
    $('body').append(`
    <main>
    <span class="hour">${time.format('hA')}</span>
    <textarea id="${time.format('hA')}" class="time-block" name="text-area"></textarea>
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

    var textID = $(`#${time}`).text()
    console.log(textID);

    time.add(1, 'hours');
};



//Saati kontrol edecegim 
var currentTime = moment().format('hA');
console.log(currentTime);






// $("#6PM").addClass('present');

// $(body).each(function(){
//      if( currentTime == $() )
// })




// console.log(mainTime);


