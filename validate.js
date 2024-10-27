"use strict";
function validateSubmit(e) {

  e.preventDefault();
  let isValidated = true;
  
  let fname = document.getElementById("fname");
  
  let lname = document.getElementById("lname");
  
  let color = document.getElementById("color");
  
  let agree = document.getElementById("agree");
  
  let errfname = document.getElementById("err_fname");
  let message = "";
  if (fname.value == "") {
    message = "BRAK IMIENIA";
    isValidated = false;
  } else {
    if(!isCorrectNameFormat(fname)) {
        message = "Nieprawidlowy format imienia"
    } else {
        message = "";  
    }
    
  }
  errfname.innerText = message;

    let errlname = document.getElementById("err_lname");
  message = "";
  if (lname.value == "") {
    message = "BRAK NAZWISKA";
    isValidated = false;
  } else {
    if(!isCorrectNameFormat(lname)) {
        message = "Nieprawidłowy format nazwiska";
    } else {
        message = "";  
    }
  }
  errlname.innerText = message;

  let erragree = document.getElementById("err_agree");
  message = "";
  if (!agree.checked) {
    message = "BRAK WYMAGANEJ ZGODY";
    isValidated = false;
  } else {
    message = "";  
  }
  erragree.innerText = message;
  
  let lastResult = document.getElementById("lastResult");
  lastResult.innerText = isValidated ? "Sukces!" : "Rejestracja się nie powiodła.";

  if (isValidated) {
    saveChanges(fname, lname, color);
  }

  return isValidated;
}

function isCorrectNameFormat(input) {
    const pattern = /[A-Z]\w{4,}/gm;
    return pattern.test(input);
}

function saveChanges(fname, lname, color) {
    let success = document.getElementById("success");
    success.innerText = "Witaj:" + fname.value + " " + lname.value;
    success.style.color = color.value;

    lname.value = "";
    fname.value = "";
    color.value = "#000000";
    agree.checked = false;
}