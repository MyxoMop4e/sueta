
 var modal = document.getElementById("my_modal");
 var btn = document.getElementById("btn_modal");
 var span = document.getElementsByClassName("close")[0];
 var btnclose = document.getElementById("btn_inside");

 btn.onclick = function () {
    modal.style.display = "block";
 }

 span.onclick = function () {
    modal.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

btnclose.onclick = function () {
    modal.style.display = "none";
 }



