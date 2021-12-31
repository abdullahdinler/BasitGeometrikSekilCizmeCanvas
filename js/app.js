var tuval = document.getElementById("myCanvas");
var cizim = tuval.getContext("2d");
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x5 = 0;
var y1 = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;
var y5 = 0;

// Farenin kordinatlari ile daire cizme.
function daireCiz(a) {
  if (x1 == 0 && y1 == 0) {
    var cp = tuval.getBoundingClientRect();
    x1 = a.clientX - cp.left;
    y1 = a.clientY - cp.top;
    cizim.beginPath();
    cizim.arc(x1, y1, 70, 0, 2 * Math.PI);
    cizim.stroke();
    cizim.closePath();

  }
  document.getElementById("p1").innerHTML = "Daire Çizildi.";
}

//----------------------------------------------------------//

// Ekranin dort farkli kosesine tiklayarak dortgen cizme.
function cokgenCiz(b) {
  if (x1 == 0 && y1 == 0) {
    var cp = tuval.getBoundingClientRect();
    x1 = b.clientX - cp.left;
    y1 = b.clientY - cp.top;
    cizim.beginPath();
    cizim.moveTo(x1, y1);
    cizim.stroke();
  } else if (x2 == 0 && y2 == 0) {
    var cp = tuval.getBoundingClientRect();
    x2 = b.clientX - cp.left;
    y2 = b.clientY - cp.top;

    cizim.lineTo(x2, y2);
    cizim.stroke();
  } else if (x3 == 0 && y3 == 0) {
    var cp = tuval.getBoundingClientRect();
    x3 = b.clientX - cp.left;
    y3 = b.clientY - cp.top;
    cizim.lineTo(x3, y3);
    cizim.stroke();
  } else if (x4 == 0 && y4 == 0) {
    var cp = tuval.getBoundingClientRect();
    x4 = b.clientX - cp.left;
    y4 = b.clientY - cp.top;
    cizim.beginPath();
    cizim.lineTo(x3, y3);
    cizim.lineTo(x4, y4);
    cizim.stroke();
  } else if (x5 == 0 && y5 == 0) {
    var cp = tuval.getBoundingClientRect();
    x5 = b.clientX - cp.left;
    y5 = b.clientY - cp.top;
    cizim.beginPath();
    cizim.lineTo(x4, y4);
    cizim.lineTo(x5, y5);
    cizim.stroke();
    cizim.closePath();
  }
  document.getElementById("p1").innerHTML = "Dörtgen Çizildi";
}

//----------------------------------------------------------//

// uc noktaya tiklayarak ucgen cizme.
function ucgenCiz(d) {
  if (x1 == 0 && y1 == 0) {
    var cp = tuval.getBoundingClientRect();
    x1 = d.clientX - cp.left;
    y1 = d.clientY - cp.top;
    cizim.beginPath();
    cizim.moveTo(x1, y1);
    cizim.stroke();
  } else if (x2 == 0 && y2 == 0) {
    var cp = tuval.getBoundingClientRect();
    x2 = d.clientX - cp.left;
    y2 = d.clientY - cp.top;
    cizim.lineTo(x2, y2);
    cizim.stroke();
  } else if (x3 == 0 && y3 == 0) {
    var cp = tuval.getBoundingClientRect();
    x3 = d.clientX - cp.left;
    y3 = d.clientY - cp.top;
    cizim.lineTo(x3, y3);
    cizim.stroke();
  } else if (x4 == 0 && y4 == 0) {
    var cp = tuval.getBoundingClientRect();
    x4 = d.clientX - cp.left;
    y4 = d.clientY - cp.top;
    cizim.beginPath();
    cizim.lineTo(x3, y3);
    cizim.lineTo(x4, y4);
    cizim.stroke();
  }
  document.getElementById("p1").innerHTML = "Üçgen Çizildi.";
}

//----------------------------------------------------------//

// Baslangic ve bittis noktasini secerek cizgi cizme.
function cizgiCiz(e) {
  if (x1 == 0 && y1 == 0) {
    var cp = tuval.getBoundingClientRect();
    x1 = e.clientX - cp.left;
    y1 = e.clientY - cp.top;
    cizim.beginPath();
    cizim.moveTo(x1, y1);
    cizim.stroke();
  } else if (x2 == 0 && y2 == 0) {
    var cp = tuval.getBoundingClientRect();
    x2 = e.clientX - cp.left;
    y2 = e.clientY - cp.top;
    cizim.lineTo(x2, y2);
    cizim.stroke();
  } else if (x3 == 0 && y3 == 0) {
    var cp = tuval.getBoundingClientRect();
    x3 = e.clientX - cp.left;
    y3 = e.clientY - cp.top;
    cizim.beginPath();
    cizim.lineTo(x3, y3);
    cizim.stroke();
    cizim.closePath();
  }
  document.getElementById("p1").innerHTML = "Çizgi Çizildi.";
}

//----------------------------------------------------------//

// Fareyle tikladiginiz yerin x ve y kordinatlari alma.
function kordinatlariAl(event) {
  var cp = tuval.getBoundingClientRect();
  var x = event.clientX - cp.left;
  var y = event.clientY - cp.top;
  var kordinatlar = "X : " + x + " , Y : " + y;
  document.getElementById("kordinat").innerHTML = kordinatlar;
}

//----------------------------------------------------------//

// Tuvali temizlemek icin kulanilan foksiyon
function temizle() {
  cizim.beginPath();
  cizim.clearRect(0, 0, tuval.width, tuval.height);
  cizim.stroke();
  cizim.closePath();
  //alert("Sayfa Temizlendi.");
  window.location.reload();
  document.getElementById("p1").innerHTML = "Sayfa temizlendi.";
}
