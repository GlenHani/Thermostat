
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



$(document).ready(function(){
    var temp = new Thermostat();
    currentTemp(temp);
    upTemp(temp);
    downTemp(temp);
    reset(temp);
    psmStat(temp);
    psmOn(temp);
    psmOff(temp);
});