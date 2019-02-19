( function( $ ) {
    $('document').ready(function(){
        var date = new Date();
        changeDate(date);
    });
} )( jQuery );

$.datetimepicker.setLocale('lt');

function creatDatePickers(times){
    $('#datetime').datetimepicker({
        inline:true,
        minDate: new Date(),
        allowTimes:[
        '10:00', '13:00', '15:00',
        '17:00', '17:15', '17:30', '19:00', '20:00'
    ],
        // timepicker: times === undefined ? false : true
    });
}

//dummy function that simulates backend
function getAvailableTimes(date){
    var data = {
    };
    return data [date];
}

function changeDate(date) {
    date = date.toString();
    date = date.substring(0, date.indexOf(" "));
    var availableTimes = getAvailableTimes(date);

    // if (availableTimes === undefined){
    //     $('#idelement').html('Nėra laisvų laikų. Prašome pasirinkti kitą dieną')
    // }
    creatDatePickers(availableTimes);
}
function addRow() {
    var time = document.getElementById("datetime");
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);






    row.insertCell(0).innerHTML= time.value;
    row.insertCell(1).innerHTML= name.value;
    row.insertCell(2).innerHTML= phone.value;
    row.insertCell(3).innerHTML= '<input class = "btn" id = "save" type="button" value = "Trinti" onClick="Javacsript:deleteRow(this)">';

}



function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
}

function load() {
    console.log("Page load finished");
}
