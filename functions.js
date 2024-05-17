let code = "_"
console.log(code)
function check() {
    code = document.getElementById("access-code").value;
    if (code == "BPS") {
        window.location.href = 'BPS.int/';
    }
    else if (code == "Bps"){
        window.location.href = 'BPS.int/';
    }
    else if (code == "bps"){
        window.location.href = 'BPS.int/';
    }
    else if (code == "pixelman"){
        window.location.href = 'https://pixelman55.github.io/main/'
    }
    else if (code == "games"){
        window.location.href = 'BPS.int/games.html'
    }
    else {
        console.log(code);
    }
}