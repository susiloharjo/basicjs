document.getElementById("demo").innerHTML = "Rp. 0";

function pencet(){
  var qty = document.getElementById('qty').value;
  jumlah = qty * 2000;
  document.getElementById("demo").innerHTML = "Rp. " + jumlah;
}

function up(){
  var qty = document.getElementById('qty').value;
  var jumlah = (qty + 1) * 2000;
  var sisa = (qty + 1);
  document.getElementById("demo").innerHTML = "Rp. " + jumlah;
  document.getElementById("qty").value = sisa;
}

function down(){
  var qty = document.getElementById('qty').value;
  var jumlah = (qty - 1) * 2000;
  var sisa = qty - 1 ;

  document.getElementById("demo").innerHTML = "Rp. " + jumlah;
  document.getElementById("qty").value = sisa;

}

function jumlah(){
 var qty = document.getElementById('qty').value;
  var jumlah = qty * 2000;
  document.getElementById("demo").innerHTML = "Rp. " + jumlah;
  // document.getElementById("qty").value = qty;

}

function reset() {
  document.getElementById("qty").value = 0;

}
