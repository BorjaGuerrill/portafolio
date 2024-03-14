let password123 = "a"
let username = "a"
function justatestjustatest() {
  username = document.getElementById("username").value;
  //volver variable let a global porque ahora solo funciona dentro de esta funcion
  if (username == "Borja pro777") {
    password123 = "susibell123";
  }
  else if (username == "Carlos") {
    password123 = 'ilovejustinbieber1010'
  }
  else {
    console.log("waiting");
  }
  return username
}
function submitted() {
  //por alguna razon siempre toma como que esta mal, revisar en iCode, yo solo, o Chatgpt
  let passwordinput = document.getElementById("passwordinput").value;
  if (username == "Borja pro777" && passwordinput == "susibell123") {
    window.location.href = 'Borja-pro777.html'
  }
  else if (username == "Carlos" && passwordinput == "ilovejustinbieber1010") {
    window.location.href = 'Carlos.html'
  }
  else {
    document.getElementById("errorp").innerHTML =
      "ERROR password or user not correct";
  }
}
function testme() {
  console.log(username);
  console.log(passwordinput);
}
