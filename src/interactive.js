
function currentTemp(temp){
    $('#temperature').text( "Current Temp: " + temp.GetCurrentTemp());

    if (temp.Usage() == "Low - Usage"){
        $('#temperature').removeClass();
        $('#temperature').addClass('low-usage');
    } else if (temp.Usage() == "Medium - Usage"){
        $('#temperature').removeClass();
        $('#temperature').addClass('medium-usage');
    } else {
        $('#temperature').removeClass();
        $('#temperature').addClass('high-usage');
    }
}

function psmStat(temp){
    $('#power-saving-status').text(function(){
        if (temp.powerSavingMode)  {
            return "On"
        }
        else {
            return "Off"
        } 
    });
}
  
function upTemp(temp){
$('#temperature-up').click( function() { 
    
    temp.UpTemp();
    currentTemp(temp);
});
}

function downTemp(temp){
$('#temperature-down').click( function() { 
    temp.DownTemp();
    currentTemp(temp);

});
}

function reset(temp){
$('#temperature-reset').click( function() {  
    temp.reset();
    currentTemp(temp);
});
}

function psmOn(temp){
    $('#powersaving-on').click( function() {  
        temp.turnPSMOn();
        psmStat(temp);
    });
}

function psmOff(temp){
    $('#powersaving-off').click( function() {  
       temp.turnPSMOff();
        psmStat(temp);
    });
}

function GetAPI(){

$('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })

    console.log(city);
  });
}
// $('#select-city').submit(function(event) {
//     event.preventDefault();
//     var city = $('#current-city').val();
//     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=1553e595a684699f6d05e9fe7b9690f1&units=metric', function(data) {
//       $('#current-temperature').text(data.main.temp);
//     })

//     console.log(city);
//   })


$(document).ready(function(){
    var temp = new Thermostat();
    currentTemp(temp);
    upTemp(temp);
    downTemp(temp);
    reset(temp);
    psmStat(temp);
    psmOn(temp);
    psmOff(temp);
    GetAPI();

});


