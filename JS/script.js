
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("myslides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}

function validateForm() {
  const nama = document.forms['nama-anda']['name-input'].value

  if (nama == ''){
    document.getElementById("error-name").innerHTML = "Tidak Boleh Kosong!"
    return false
  }
  setName (nama);
  
  return false;
}

function setName(name) {
  document.getElementById("name").innerHTML = name;
  document.getElementById('error-name').innerHTML = "";

  return false;
}