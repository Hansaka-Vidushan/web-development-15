var start = new Date().getTime();

// Shape Clicker
document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none"

    var end = new Date().getTime();

    var timeDuration = (end - start) / 1000;

    document.getElementById("time").innerHTML = timeDuration + "s";




}