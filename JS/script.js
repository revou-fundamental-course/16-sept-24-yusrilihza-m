
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
function validateMessage(){
  const name = document.forms["message-form"]["full-name"].value
  const birthdate = document.forms["message-form"]["birth-date"].value
  const gender = document.forms["message-form"]["gender"].value
  const messages = document.forms["message-form"]["messages"].value

  if (name == "" || birthdate == "" || gender == "" || messages == ""){
    alert("Tidak boleh kosong!");
    return false;
  }

  setSenderUI(name, birthdate, gender, messages)
  return false;
}

function setSenderUI(name, birthdate, gender, messages){
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthdate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
}
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