<?php include 'header.php';?>
<div class="calendar">
    <h5>Pasirinkite datą ir laiką</h5>
    <input onchange="changeDate(this.value)" id="datetime" type="text" >
    <h5>Įveskite vardą</h5>
    <input class="form-control" type="text" placeholder="Vardas" required />
    <h5>Įveskite telefono numerį</h5>
    <input class="form-control" type="text" placeholder="Telefonas" required />
    <a href="successful_registration.php" class="btn ">Registruotis</a>
    <div id = "idelement"></div>
</div>



<?php include 'footer.php';?>
