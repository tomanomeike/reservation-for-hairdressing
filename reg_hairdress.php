<?php include 'header.php';?>
<!--<div class="calendar">-->
<!--    <h5>Pasirinkite datą ir laiką</h5>-->
<!--    <input onchange="changeDate(this.value)" id="datetime" type="text" >-->
<!--    <h5>Įveskite kliento vardą</h5>-->
<!--    <input id = "name" class="form-control" type="text" placeholder="Vardas">-->
<!--    <h5>Įveskite kliento telefono numerį</h5>-->
<!--    <input id="phone" class="form-control" type="text" placeholder="Telefonas">-->
<!---->
<!--    <a href="\reservation-for-hairdressing\list.php" class="btn id="add" value="Add" onclick="Javascript:addRow()">Registruoti</a>-->
<!--    <a href="\reservation-for-hairdressing\list.php" class="btn ">Koreguoti</a>-->
<!--    <div id = "idelement"></div>-->
<!--</div>-->

<div class = "inputForm">
    <h5>Pasirinkite datą ir laiką</h5>
    <input onchange="changeDate(this.value)" id="datetime" type="text" >
<div id="myform">
    <h5>Įveskite kliento duomenis</h5>
    <table class = "table">
        <tr>
            <td>Vardas</td>
            <td><input type="text" id="name" placeholder="Vardas" required method = POST/></td>
        </tr>
        <tr>
            <td>Telefono numeris</td>
            <td><input type="text" id="phone" placeholder="Telefonas" required method = POST/></td>

        </tr>
        <tr>
            <td></td>
            <td><input class = "btn" type="button" id="add"  value="Registruoti" onclick="Javascript:addRow()" method = POST></td>
        </tr>
    </table>
</div>
<div id="mydata">
    <table class = "table" id="myTableData">
        <tr>
            <td><b>Laikas</b></td>
            <td><b>Vardas</b></td>
            <td><b>Telefonas</b></td>
            <td><b>Veiksmas</b></td>
        </tr>
    </table>
    &nbsp;<br/>
</div>

</div>
<?php include 'footer.php';?>
