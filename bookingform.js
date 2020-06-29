const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');


form.addEventListener('submit', (e)=>{
  e.preventDefault();
  
  checkInputs();
});

function checkInputs(){
  //get the value from the input
  const firstnameValue = firstname.value;
  const lastnameValue = lastname.value;
  const emailValue = email.value.trim();
  const phonenumberValue = phonenumber.value.trim();
 
  
  if(firstnameValue === ''){
    //show error message
    //add error class
    setErrorFor(firstname, 'Firstname cannot be blank');
  } else{
    //add success class
    setSuccessFor(firstname);
  }

  if(lastnameValue === ''){
    setErrorFor(lastname, 'Lastname cannot be blank');
  }else{
    setSuccessFor(lastname);
  }

  if(emailValue === ''){
    setErrorFor(email, 'Email cannot be blank');
  } else if(!isEmail(emailValue)){
    setErrorFor(email, 'Email is not valid');
  } else{
    setSuccessFor(email);
  }
  
  if(phonenumberValue === ''){
    setErrorFor(phonenumber, 'Phone number cannot be blank');
  }else if(phonenumberValue.length != 10 ){
    setErrorFor(phonenumber, 'Phone number must contain 10 numbers');
  }else{
    setSuccessFor(phonenumber);
  }

  

}
function setErrorFor(input, message){
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector('small');
  
  //add mesage
  small.innerText = message;
  
  //add Error class
  formControl.className = 'form-control error';
}
function setSuccessFor(input){
  const formControl = input.parentElement; //.form-control
  
  //add Success class
  formControl.className = 'form-control success';
}
function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}