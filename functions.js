let code = "_"
console.log(code)
function check() {
    code = document.getElementById("access-code").value;
    if (code == "BPS") {
        window.location.href = 'BPS.int/';
    }
    else if (code == "test"){
        window.location.href = 'test.html'
    }
    else {
        console.log(code);
    }
}