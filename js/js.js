( function( $ ) {
    $('document').ready(function(){
        var date = new Date();
        changeDate(date);
    });
} )( jQuery );

function creatDatePickers(times){
    $('#datetime').datetimepicker({
        inline:true,
        minDate: new Date(),
        allowTimes:times,
        timepicker: times === undefined ? false : true
    });
}

//dummy function that simulates backend
function getAvailableTimes(date){
    var data = {
        "2019/02/20" : ["10:00", "10:30", "11:30", "13:00"],
        "2019/02/27": ["11:15", "12:30", "16:45"]
    };
    return data [date];
}

function changeDate(date) {
    date = date.toString();
    date = date.substring(0, date.indexOf(" "));
    var availableTimes = getAvailableTimes(date);
    if (availableTimes === undefined){
        $('#idelement').html('nerasta laiku')
    }
    creatDatePickers(availableTimes);
}