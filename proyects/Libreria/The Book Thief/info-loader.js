window.addEventListener(
    "load",
    function () {
      documentLoader(); // Load JSON data when the page is loaded

      // Autoplay background music
      var audio = document.getElementById("backgroundMusic");
      audio.play();
    },
    false
  );

  function reqListener() {
    var obj = JSON.parse(this.responseText);
    document.getElementById("book_title").innerHTML = obj.book_title;
    document.getElementById("book_author").innerHTML = obj.book_author;
    document.getElementById("summary").innerHTML = obj.summary;
    document.getElementById("isbn").innerHTML = obj.isbn;
    document.getElementById("genero").innerHTML = obj.genero;
    document.getElementById("date").innerHTML = obj.date;
    document.getElementById("language").innerHTML = obj.language;
    document.getElementById("pages").innerHTML = obj.pages;
  }

  function documentLoader() {
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "info.json", true);
    oReq.send();
  }